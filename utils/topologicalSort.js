function topologicalSort(nodes, edges) {
    let sorted = [], visited = new Set(), temp = new Set();
    
    function visit(node, ancestors = []) {
      if (temp.has(node)) {
        throw new Error('Detected cyclic dependency');
      }
      if (!visited.has(node)) {
        temp.add(node);
        edges.filter(edge => edge[0] === node).forEach(([ , to]) => visit(to, [...ancestors, node]));
        temp.delete(node);
        visited.add(node);
        sorted.unshift(node);
      }
    }
  
    nodes.forEach(node => {
      if (!visited.has(node)) {
        visit(node);
      }
    });
  
    return sorted;
}

module.exports = topologicalSort;
