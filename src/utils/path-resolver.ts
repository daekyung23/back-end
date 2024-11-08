import { resolve } from 'path'
import * as TsConfigPaths from 'tsconfig-paths'

// tsconfig.json 로드
const config = TsConfigPaths.loadConfig(process.cwd())
if (config.resultType === 'failed') {
  throw new Error('Failed to load tsconfig paths')
}

// 성공한 경우의 config 타입 단언
const { absoluteBaseUrl, paths } = config as TsConfigPaths.ConfigLoaderSuccessResult

console.log('TSConfig loaded:', {
  baseUrl: absoluteBaseUrl,
  paths: JSON.stringify(paths, null, 2)
})

// path matcher 생성
const matchPath = TsConfigPaths.createMatchPath(
  absoluteBaseUrl,
  paths,
  config.mainFields,
  config.addMatchAll
)

export function resolvePath(path: string): string {
  // alias path인 경우
  if (path.startsWith('@')) {
    // 1. 직접 매칭
    let matched = matchPath(path)
    
    // 2. 와일드카드 매칭
    if (!matched) {
      const pathWithWildcard = `${path}/*`
      matched = matchPath(pathWithWildcard)
      if (matched) {
        matched = matched.replace('/*', '')
      }
    }
    
    // 3. 기본 경로 매칭
    if (!matched && paths[path]) {
      matched = resolve(absoluteBaseUrl, paths[path][0])
    }
    if (!matched) {
      throw new Error(`Cannot resolve path: ${path}`)
    }
    return matched
  }
  
  // 일반 path인 경우
  return resolve(process.cwd(), path)
} 