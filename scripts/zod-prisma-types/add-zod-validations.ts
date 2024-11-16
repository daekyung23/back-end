import * as fs from 'fs'
import * as path from 'path'

function addZodValidations() {
  const schemaPath = path.join(process.cwd(), 'prisma', 'schema.prisma')
  let lines = fs.readFileSync(schemaPath, 'utf8').split('\n')


  // 1단계: 기존 주석 제거 및 이전 줄 삭제
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('/// @zod.custom.use')) lines.splice(i--, 1)
  }
  
  // 각 줄 별로 처리
  lines = lines.filter(line => !line.includes('/// @zod.custom.use')).map(line => {
    
    // 필드 타입별 처리
    if (line.includes('Int')) {
      if (line.includes('@id')) {
        return `${line} /// @zod.custom.use(z.coerce.number())`
      } else if (line.includes('@default')) {
        const defaultMatch = line.match(/@default\(([^)]+)\)/)
        const defaultValue = defaultMatch ? defaultMatch[1] : ''
        return `${line} /// @zod.custom.use(z.coerce.number().default(${defaultValue}))`
      } else if (line.includes('?')) {
        return `${line} /// @zod.custom.use(z.coerce.number().optional())`
      } else {
        return `${line} /// @zod.custom.use(z.coerce.number())`
      }
    }
    
    if (line.includes('String') && line.includes('@db.VarChar')) {
      if (line.includes('@id')) {
        line = line.replace('String?', 'String')
      }
      
      const maxMatch = line.match(/@db\.VarChar\((\d+)\)/)
      const maxLength = maxMatch ? maxMatch[1] : '255'
      
      if (line.includes('?')) {
        return `${line} /// @zod.custom.use(z.string().max(${maxLength}).optional())`
      } else {
        return `${line} /// @zod.custom.use(z.string().max(${maxLength}))`
      }
    }
    
    return line
  })
  fs.writeFileSync(schemaPath, lines.join('\n'))
  console.log('Zod validations updated!')
}

addZodValidations()