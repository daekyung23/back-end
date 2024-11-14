import * as fs from 'fs'
import * as path from 'path'

function addZodValidations() {
  const schemaPath = path.join(process.cwd(), 'prisma', 'schema.prisma')
  let content = fs.readFileSync(schemaPath, 'utf8')
  
  // 1. 기존 주석 제거
  let lines = content.split('\n')
  lines = lines.filter(line => !line.includes('@zod.'))
  content = lines.join('\n')
  
  // 2. 새로운 validation 추가
  // Required VarChar 필드
  content = content.replace(
    /(\s+)(\w+)\s+String\s+@db\.VarChar\((\d+)\)(?!\?)/g,
    '$1$2 String @db.VarChar($3) /// @zod.string({ required_error: "$2은 필수 입력값입니다" }).min(1).max($3, { message: "$2은 $3자를 초과할 수 없습니다" })'
  )
  
  // Optional VarChar 필드
  content = content.replace(
    /(\s+)(\w+)\s+String\?\s+@db\.VarChar\((\d+)\)/g,
    '$1$2 String? @db.VarChar($3) /// @zod.string.max($3, { message: "$2은 $3자를 초과할 수 없습니다" })'
  )
  
  // Required TinyInt 필드
  content = content.replace(
    /(\s+)(\w+)\s+Int\s+.*@db\.TinyInt(?!\?)/g,
    '$1$2 Int @db.TinyInt /// @zod.number({ required_error: "$2은 필수 입력값입니다" }).int().min(0).max(1)'
  )
  
  // Optional TinyInt 필드
  content = content.replace(
    /(\s+)(\w+)\s+Int\?\s+.*@db\.TinyInt/g,
    '$1$2 Int? @db.TinyInt /// @zod.number.int().min(0).max(1)'
  )
  
  fs.writeFileSync(schemaPath, content)
  console.log('Zod validations updated!')
}

addZodValidations()