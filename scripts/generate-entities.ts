import { DataSource } from 'typeorm'
import { generate } from 'typeorm-extension'
import dotenv from 'dotenv'

dotenv.config()

async function generate() {
  const dataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST_DEV,
    port: Number(process.env.DB_PORT_DEV),
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    synchronize: false,
    logging: true
  })

  try {
    await generate({
      dataSource,
      output: {
        path: 'src/entities',
        prettier: true,
        eslint: true
      },
      skipTables: ['typeorm_metadata']
    })
    console.log('엔티티 생성 완료!')
  } catch (error) {
    console.error('엔티티 생성 실패:', error)
  } finally {
    await dataSource.destroy()
  }
}

generate()