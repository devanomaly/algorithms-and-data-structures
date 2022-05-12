const Queue = require('../stacks-and-queues/Queue')
const BST = require('./BST')
// Iterative BFS for Binary Trees
class BFS {
  constructor(treeRoot) {
    this.current = treeRoot
    this.visited = new Array()
    this.queue = new Queue()
  }
  crawl() {
    if (this.visited[0]) return this.visited
    while (this.current) {
      if (this.current.left) this.queue.enqueue(this.current.left)
      if (this.current.right) this.queue.enqueue(this.current.right)
      this.visited.push(this.current.val)
      this.current = this.queue.dequeue()
    }
    return this.visited
  }
  reRoot(newRoot) {
    this.current = newRoot
    BFS._cleanVisited(this)
    return this
  }
  static _cleanVisited(bfs) {
    bfs.visited = new Array()
    return true
  }
}

module.exports = BFS

const bst = new BST()
bst.insert(12378)
bst.insert(-50)
bst.insert(-20)
bst.insert(100)
bst.insert(0)
bst.insert(230)
bst.insert(10000)
bst.insert(457)

const bfs = new BFS(bst.root)
console.log(bfs.crawl())
console.log(bfs.crawl())
console.log(bfs.crawl())
const bst2 = new BST()
bst2.insert(3)
bst2.insert(-1)
bst2.insert(5)
bst2.insert(-3)
bst2.insert(0)
bst2.insert(10)
bst2.insert(4)
bfs.reRoot(bst2.root)
console.log(bfs.crawl())

class DFS {
  // Recursive DFS for trees
  constructor(treeRoot) {
    this.root = treeRoot
  }

  preOrderCrawl(current = this.root, visited = []) {
    visited.push(current.val)
    if (current.left) {
      visited = this.preOrderCrawl(current.left, visited)
    }
    if (current.right) {
      visited = this.preOrderCrawl(current.right, visited)
    }
    return visited
  }

  postOrderCrawl(current = this.root, visited = []) {
    if (current.left) {
      visited = this.postOrderCrawl(current.left, visited)
    }
    if (current.right) {
      visited = this.postOrderCrawl(current.right, visited)
    }
    visited.push(current.val)

    return visited
  }

  inOrderCrawl(current = this.root, visited = []) {
    if (current.left) {
      visited = this.inOrderCrawl(current.left, visited)
    }
    visited.push(current.val)
    if (current.right) {
      visited = this.inOrderCrawl(current.right, visited)
    }

    return visited
  }

}
const dfs = new DFS(bst2.root)
console.log(dfs.preOrderCrawl())
console.log(dfs.postOrderCrawl())
console.log(dfs.inOrderCrawl())