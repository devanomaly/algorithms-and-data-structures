const Queue = require('../stacks-and-queues/Queue'
)
// Working only with undirected graphs, for now...
class Graph {

  constructor() {
    this.adjList = {}
  }

  addVertex(key) {
    if (this.adjList[key]) return false
    this.adjList[key] = [] // TODO:>> a binary search tree could be better: we could sort keys alphabetically/numerically... Or, in some cases, a linked-list would do the job (e.g., BFS?)
    return true
  }

  addEdge(key1, key2) {
    this.addVertex(key1)
    this.addVertex(key2)
    this.adjList[key1].push(key2)
    this.adjList[key2].push(key1)
    return true
  }

  removeEdge(key1, key2) {
    this.adjList[key1] = this.adjList[key1].filter(key => key !== key2)
    this.adjList[key2] = this.adjList[key2].filter(key => key !== key1)
    return true
  }

  removeVertex(vertex) {
    while (this.adjList[vertex].length) {
      this.removeEdge(vertex, this.adjList[vertex].pop())
    }
    delete this.adjList[vertex]
    return true
  }

  dfs(nodeName, visited = {}, result = []) {
    // Recursive implementation of Depth-First Search
    if (!this.adjList[nodeName]) {
      return null
    }
    visited[nodeName] = true;
    result.push(nodeName)
    this.adjList[nodeName].forEach(vertex => !visited[vertex] ? this.dfs(vertex, visited, result) : null)
    return result
  }

  bfs(nodeName) {
    // Iterative implementation of Breadth-First Search
    var queue = new Queue()
    var visited = {}
    var result = []
    var current = nodeName
    if (!this.adjList[nodeName]) {
      return null
    }
    visited[nodeName] = true
    while (current) {
      result.push(current)
      this.adjList[current].forEach(vertex => {
        if (!visited[vertex]) {
          queue.enqueue(vertex)
          visited[vertex] = true
        }
      })
      current = queue.dequeue()
    }
    return result
  }
}
module.exports = Graph

const g = new Graph()
console.log(g.addVertex("Rome"))
console.log(g.addVertex("Rome"))
console.log(g.adjList)
console.log(g.addEdge("Rome", "Bogota"))
console.log(g.adjList)
console.log(g.removeEdge("Rome", "Bogota"))
console.log(g.adjList)
console.log(g.addEdge("Rome", "Bogota"))
console.log(g.adjList)
console.log(g.removeVertex("Rome"))
console.log(g.adjList)
console.log(g.addEdge("Rome", "Bogota"))
console.log(g.addEdge("Rome", "Athens"))
console.log(g.addEdge("Bogota", "New York"))
console.log(g.addEdge("London", "Brasilia"))
console.log(g.addEdge("London", "Bogota"))
console.log(g.addEdge("Sao Paulo", "Brasilia"))
console.log(g.removeEdge("London", "Bogota"))
console.log(g.addEdge("Bogota", "Brasilia"))
console.log(g.adjList)
console.log(g.dfs("Sao Paulo"))
console.log(g.bfs("Sao Paulo"))

const g2 = new Graph()
g2.addEdge("A", "B")
g2.addEdge("A", "C")
g2.addEdge("B", "D")
g2.addEdge("C", "E")
g2.addEdge("F", "D")
g2.addEdge("E", "D")
g2.addEdge("F", "E")

console.log(g2.adjList)
console.log(g2.dfs("A"))
console.log(g2.bfs("A"))