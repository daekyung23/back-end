/**
 * 의존성 그래프에 대한 타입 정의
 */
export type DependencyGraph = {
  [key: string]: string[]
}

/**
 * 주어진 의존성 그래프에 대해 위상 정렬을 수행합니다.
 * 
 * @param deps - 의존성 그래프 객체
 * @returns 위상 정렬된 노드 배열
 * @throws Error 순환 의존성이 발견된 경우
 * 
 * @example
 * const deps = {
 *   'v_client_hierarchy': [],
 *   'v_device_location_log': ['v_client_hierarchy'],
 *   'v_device_install_info': ['v_device_location_log']
 * }
 * const sorted = topologicalSort(deps)
 * // ['v_client_hierarchy', 'v_device_location_log', 'v_device_install_info']
 */
export function topologicalSort(deps: DependencyGraph): string[] {
  const sorted: string[] = []
  const visited = new Set<string>()
  const temp = new Set<string>()  // 순환 의존성 감지용

  function visit(node: string) {
    if (temp.has(node)) {
      throw new Error(`Circular dependency found: ${node}`)
    }
    if (visited.has(node)) return
    
    temp.add(node)
    // 의존하는 노드들을 먼저 처리
    for (const dep of deps[node] || []) {
      visit(dep)
    }
    temp.delete(node)
    visited.add(node)
    sorted.push(node)
  }

  // 모든 노드에 대해 위상 정렬 수행
  for (const node of Object.keys(deps)) {
    if (!visited.has(node)) {
      visit(node)
    }
  }

  return sorted
}