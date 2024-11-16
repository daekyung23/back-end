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
        return `${line} /// @zod.custom.use(z.coerce.number().nullable())`
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
        return `${line} /// @zod.custom.use(z.string().max(${maxLength}).nullable())`
      } else {
        return `${line} /// @zod.custom.use(z.string().max(${maxLength}))`
      }
    }
    
    return line
  })
  fs.writeFileSync(schemaPath, lines.join('\n'))
  console.log('Zod validations updated!')
}

function alignSchema() {
  const schemaPath = path.join(process.cwd(), 'prisma', 'schema.prisma')
  let content = fs.readFileSync(schemaPath, 'utf8')
  
  // 모델 블록 단위로 분리
  const blocks = content.split(/\n\n+/)
  
  const alignedBlocks = blocks.map(block => {
    const lines = block.split('\n')
    
    if (lines[0].trim().startsWith('model') || lines[0].trim().startsWith('view')) {
      const fieldLines = lines.slice(1, -1)
      const propertyLines = fieldLines.filter(line => 
        line.trim() && !line.trim().startsWith('@@'))
      
      let maxNameLength = 0
      let maxTypeLength = 0
      let maxAttrLength = 0
      
      propertyLines.forEach(line => {
        // 수정된 정규식 패턴
        const match = line.trim().match(/^([^\s]+)\s+([^\s]+(?:\?)?)\s*(.+)?$/)
        if (match) {
          const [_, name, type, attrs] = match
          maxNameLength = Math.max(maxNameLength, name.length)
          maxTypeLength = Math.max(maxTypeLength, type.length)
          if (attrs) {
            const attrPart = attrs.split('///')[0].trim()
            maxAttrLength = Math.max(maxAttrLength, attrPart.length)
          }
        }
      })
      
      // 각 라인 정렬
      const alignedLines = fieldLines.map(line => {
        if (!line.trim() || line.trim().startsWith('@@')) return line
        
        // 수정된 정규식 패턴
        const match = line.trim().match(/^([^\s]+)\s+([^\s]+(?:\?)?)\s*(.+)?$/)
        if (match) {
          const [_, name, type, rest] = match
          const parts = rest ? rest.split('///') : ['']
          const attrs = parts[0].trim()
          const comment = parts[1] ? `/// ${parts[1].trim()}` : ''
          
          return `  ${name.padEnd(maxNameLength)} ${type.padEnd(maxTypeLength)} ${attrs.padEnd(maxAttrLength)} ${comment}`.trimEnd()
        }
        return line
      })
      
      return [lines[0], ...alignedLines, lines[lines.length - 1]].join('\n')
    }
    
    return block
  })
  
  fs.writeFileSync(schemaPath, alignedBlocks.join('\n\n'))
  console.log('Schema aligned successfully!')
}

addZodValidations()
alignSchema()