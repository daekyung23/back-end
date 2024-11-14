import * as fs from 'fs'
import * as path from 'path'

function convertZodComments() {
  const zodPath = path.join(process.cwd(), 'prisma', 'zod-schemas', 'index.ts')
  let content = fs.readFileSync(zodPath, 'utf8')
  
  // 1. (로 시작하는 주석 처리 - required_error가 있는 validation
  content = content.replace(
    /\/\*\*\s*\n\s*\*\s*\((.*?)\s*\*\/\s*\n\s*(\w+):\s*z\.(\w+)\(\)/g,
    (_, validation, fieldName, type) => `${fieldName}: z.${type}(${validation}`
  )

  // 2. .으로 시작하는 주석 처리 - 단순 validation chain
  content = content.replace(
    /\/\*\*\s*\n\s*\*\s*\.(.*?)\s*\*\/\s*\n\s*(\w+):\s*z\.(\w+)\(\)/g,
    (_, validation, fieldName, type) => `${fieldName}: z.${type}().${validation}`
  )

  fs.writeFileSync(zodPath, content)
  console.log('Zod validations fixed!')
}

convertZodComments()