class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  // A linked-list-based implementation of queues
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val) {
    var newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
    } else {
      this.last.next = newNode
    }
    this.last = newNode
    return ++this.size
  }

  dequeue() {
    if (!this.first) return null
    const dequeued = this.first.val
    if (this.first === this.last) this.last = null
    this.first = this.first.next
    this.size--
    return dequeued
  }
}

const stack = new Queue()
stack.enqueue(1)
stack.enqueue(2)
stack.enqueue(3)
console.log(stack)
console.log(stack.dequeue())
console.log(stack.dequeue())
console.log(stack.dequeue())
console.log(stack.dequeue())

module.exports = Queue 