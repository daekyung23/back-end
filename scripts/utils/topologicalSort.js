/**
 * 주어진 의존성 그래프에 대해 위상 정렬을 수행합니다.
 * 의존성 그래프의 키로 존재하는 노드들만 정렬합니다.
 */
export function topologicalSort(deps) {
  const sorted = []
  const visited = new Set()
  const temp = new Set()  // 순환 의존성 감지용

  function visit(node) {
    if (temp.has(node)) {
      throw new Error(`Circular dependency found: ${node}`)
    }
    if (visited.has(node)) return
    
    temp.add(node)
    // 의존하는 노드들 중 deps에 키로 존재하는 것만 처리
    for (const dep of (deps[node] || [])) {
      if (deps[dep]) visit(dep)  // deps에 키로 존재하는 경우만 방문
    }
    temp.delete(node)
    visited.add(node)
    sorted.push(node)
  }

  // deps의 키로 존재하는 노드들만 처리
  for (const node of Object.keys(deps)) {
    if (!visited.has(node)) {
      visit(node)
    }
  }

  return sorted
}