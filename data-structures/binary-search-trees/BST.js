// At most 2 children
// left-child < parent < right-child
// left-nodes < root < right-nodes

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(val) {
    var newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    }
    var current = this.root
    while (true) {
      if (val < current.val) {
        if (current.left === null) { current.left = newNode; return this }
        current = current.left
      }
      else if (val > current.val) {
        if (current.right === null) { current.right = newNode; return this }
        current = current.right
      }
      else return this // or "undefined" to let the client know...? 
    }
  }
  search(val) {
    if (!this.root) return false
    var current = this.root
    while (current) {
      if (val < current.val) current = current.left

      else if (val > current.val) current = current.right

      else return true // or "undefined" to let the client know...? 
    }
    return false

  }
}

module.exports =  BinarySearchTree 