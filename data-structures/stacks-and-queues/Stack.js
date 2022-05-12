class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val) {
    var newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      [this.first, this.first.next] = [newNode, this.first]
    }
    return ++this.size
  }
  pop() {
    if(!this.first) return null
    const popped = this.first.val
    if(this.first === this.last) this.last = null
    this.first = this.first.next
    this.size--
    return popped
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())