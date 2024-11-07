import { exec } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'
import mysql, { RowDataPacket } from 'mysql2/promise'

interface ViewInfo extends RowDataPacket {
  TABLE_NAME: string;
  VIEW_DEFINITION: string;
  COLUMN_NAME: string;
  DATA_TYPE: string;
  IS_NULLABLE: string;
}

async function generateViewEntity() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST_DEV,
    user: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV
  })
  
  try {
    // 1. View 정보 가져오기
    const [views] = await connection.query<ViewInfo[]>(`
      SELECT 
        TABLE_NAME,
        VIEW_DEFINITION,
        COLUMN_NAME,
        DATA_TYPE,
        IS_NULLABLE
      FROM information_schema.views v
      JOIN information_schema.columns c 
        ON v.table_schema = c.table_schema 
        AND v.table_name = c.table_name
      WHERE v.table_schema = ? 
        AND v.table_name = ?
    `, [process.env.DB_NAME_DEV, 'client_view'])

    if (!Array.isArray(views) || views.length === 0) {
      throw new Error('View not found')
    }

    // 2. TypeScript 타입 매핑
    const typeMapping: Record<string, string> = {
      'int': 'number',
      'varchar': 'string',
      'tinyint': 'number',
      'datetime': 'Date',
    }

    // 3. Entity 파일 생성
    const entityContent = `import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity({
  name: "${views[0].TABLE_NAME}",
  expression: \`${views[0].VIEW_DEFINITION}\`
})
export class ${views[0].TABLE_NAME.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('')} {
${views.map(col => `
  @ViewColumn()
  ${col.COLUMN_NAME}: ${typeMapping[col.DATA_TYPE] || 'any'}${col.IS_NULLABLE === 'YES' ? ' | null' : ''};`).join('')}
}
`

    // 4. 파일 저장
    const dir = path.join(__dirname, '..', 'src', 'views')
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFileSync(
      path.join(dir, `${views[0].TABLE_NAME}.ts`),
      entityContent
    )

    console.log(`View entity generated: ${views[0].TABLE_NAME}.ts`)
  } finally {
    await connection.end()
  }
}

generateViewEntity().catch(console.error)