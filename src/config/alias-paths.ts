import { register } from 'tsconfig-paths';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { parse as parseJsonc } from 'jsonc-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tsconfig = parseJsonc(
  readFileSync(join(__dirname, '../../tsconfig.json'), 'utf-8')
)

// tsconfig paths 등록
register({
  baseUrl: './dist',
  paths: tsconfig.compilerOptions.paths
})