import SequelizeAuto from 'sequelize-auto'
import dotenv from 'dotenv'

dotenv.config()

const options = {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  directory: './src/models', // 생성될 모델 파일 위치
  port: process.env.DB_PORT,
  caseModel: 'p', // pascal
  caseFile: 'p',  // param
  singularize: true, // 단수형으로 모델 이름 생성
  additional: {
    timestamps: true,
    paranoid: true,
  },
  views: true, // VIEW도 함께 생성
  lang: 'ts'  // TypeScript 사용
}

const auto = new SequelizeAuto(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  options
)

auto.run().then(data => {
  console.log('모델 생성 완료!')
  console.log('생성된 테이블:', data.tables)
  console.log('생성된 뷰:', data.views)
}).catch(error => {
  console.error('모델 생성 실패:', error)
}) 