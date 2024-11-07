import moduleAlias from 'module-alias'
import path from 'path'
import tsconfig from '../tsconfig.json'

const rootPath = path.resolve(__dirname, '../..')

// tsconfig의 paths를 module-alias 형식으로 변환
const aliasEntries = Object.entries(tsconfig.compilerOptions.paths || {})
  .reduce((aliases: Record<string, string>, [key, patterns]) => {
    if (Array.isArray(patterns) && patterns.length > 0) {
      const aliasKey = key.replace('/*', '')
      const aliasPath = path.join(rootPath, patterns[0].replace('/*', ''))
      aliases[aliasKey] = aliasPath
    }
    return aliases
  }, {})

moduleAlias.addAliases(aliasEntries)