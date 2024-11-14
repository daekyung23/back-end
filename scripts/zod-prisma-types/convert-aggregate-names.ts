import * as fs from 'fs'
import * as path from 'path'

/**
 * prisma 5.22.0 버전과 zod-prisma-types 3.1.8 버전에서 호환성 버그가 발생함.
 * 해당 버그는 zod-prisma-types를 생성할 시 소문자로 생성되어야 할 aggregateArgs가 대문자로 생성되는 버그가 발생.
 * 원론적으론 대문자로 생성된 aggregateArgs를 소문자로 수정하는것이 옳으나, 원래 대문자로 생성해야 하는 것들을 구분하는 로직이 필요함.
 * 구분 로직이 복잡하므로, 소문자로 시작하는 aggregateArgs를 대문자로 변환하여 타입 오류를 해결하는 스크립트를 작성함.
 * 임시 스크립트이므로, 버그가 발생할 수 있음.
 * 추후 버그가 해결될 경우, prisma:generate에서 prisma:bugfix:convert-aggregate 스크립트를 제외할 것.
 */
function processAggregateNames() {
  const schemaPath = path.join(process.cwd(), 'prisma', 'zod-schemas', 'index.ts')
  let content = fs.readFileSync(schemaPath, 'utf8')
  
  // Prisma 타입 참조 패턴에서 소문자로 시작하는 AggregateArgs를 대문자로 변환
  content = content.replace(
    /Prisma\.([a-z]\w*AggregateArgs)\b/g, 
    (match, name) => match.replace(name, name.charAt(0).toUpperCase() + name.slice(1))
  )
  
  fs.writeFileSync(schemaPath, content)
  console.log('Aggregate names conversion completed!')
}

processAggregateNames() 