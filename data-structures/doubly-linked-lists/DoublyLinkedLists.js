class Node {
  constructor(val) {
    this.val = val
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let node = new Node(val)
    if (this.head === null) {
      this.head = node
    } else {
      this.tail.next = node
      node.prev = this.tail
    }
    this.tail = node
    this.length += 1
    return this
  }

  pop() {
    if (!this.head) return undefined
    const popped = this.tail
    this.tail = popped.prev
    this.tail.next = null
    this.length -= 1
    if (this.length === 0) [this.head, this.tail] = [null, null]
    popped.prev = null
    return popped
  }

  shift() {
    if (!this.head) return undefined
    let oldHead = this.head
    this.length -= 1
    this.head.prev = null
    this.head = oldHead.next
    oldHead.next = null
    if (this.length === 0) { [this.head, this.tail] = [null, null] } //refactor alarm!
    return oldHead
  }

  unshift(val) {
    var newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length += 1
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    if (index <= this.length / 2) {
      var node = DoublyLinkedList.getFromHead(this, index)
    } else { var node = DoublyLinkedList.getFromTail(this, index) }
    return node
  }
  static getFromHead(list, index) {
    // console.log("starting from head")
    var counter = 0
    var current = list.head
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current
  }
  static getFromTail(list, index) {
    // console.log("starting from tail")
    var counter = list.length - 1
    var current = list.tail
    while (counter !== index) {
      current = current.prev;
      counter--;
    }
    return current
  }
  set(index,val) {
    let node = this.get(index)
    if (!node) return false
    node.val = val
    return true
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)

    var newNode = new Node(val)
    var beforeNode = this.get(index - 1)
    var afterNode = beforeNode.next

    beforeNode.next = newNode, newNode.prev = beforeNode
    newNode.next = afterNode, afterNode.prev = newNode
    this.length++;
    return true
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    var removedNode = this.get(index)

    removedNode.prev.next = removedNode.next, removedNode.next.prev = removedNode.prev

    [removedNode.next, removedNode.prev] = [null, null]

    this.length--;
    return removedNode
  }

  reverse() {
    var current = this.head
    while (current) {
      [current.next, current.prev] = [current.prev, current.next]
      current = current.prev
    }
    [this.tail, this.head] = [this.head, this.tail];
    return this;
  }

}

const doubleList = new DoublyLinkedList()
const loopDoubleList = (list) => {
  let current = list.head
  while (current) {
    console.log(current)
    current = current.next
  }
}

doubleList.push(1)
doubleList.push(2)
doubleList.push(3)

console.log("popping")
console.log(doubleList.pop())
console.log("looping")
loopDoubleList(doubleList)
console.log("shifting")
console.log(doubleList.shift())
console.log("unshifting")
loopDoubleList(doubleList.unshift("-10"))
console.log("getting")
doubleList.push(4)
doubleList.push(5)
doubleList.push(6)
doubleList.push(4)
doubleList.push(5)
doubleList.push(6)
console.log("length", doubleList.length)
console.log(doubleList.get(-10))
console.log(doubleList.get(2))
console.log(doubleList.get(7))
console.log(doubleList.get(5))
console.log("setting")
console.log(doubleList.set(5, 100))
console.log(doubleList.get(5))
console.log(doubleList.set(-1, 100))