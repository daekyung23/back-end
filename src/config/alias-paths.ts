import { register } from 'tsconfig-paths'
import { readFileSync } from 'fs'
import { join } from 'path'
import { parse as parseJsonc } from 'jsonc-parser'

const tsconfig = parseJsonc(
  readFileSync(join(__dirname, '../../tsconfig.json'), 'utf-8')
)

// tsconfig paths 등록
register({
  baseUrl: './dist',
  paths: tsconfig.compilerOptions.paths
})