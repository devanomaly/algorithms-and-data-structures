class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
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
    }
    this.tail = node
    this.length += 1
    return this
  }

  pop() {
    if (!this.head) return undefined
    var current = this.head
    var newTail = current;

    while (current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length -= 1
    if (this.length === 0) [this.head, this.tail] = [null, null]
    return current
  }

  shift() {
    if (!this.head) return undefined
    const first = this.head
    this.length -= 1
    this.head = first.next
    if (this.length === 0) [this.head, this.tail] = [null, null] //refactor alarm!
    return first
  }

  unshift(val) {
    const newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    this.length += 1
    if (this.length === 1) this.tail = this.head
    return this
  }

  get(index) {
    if (index < 0 || index > this.length) return null
    var counter = 0
    var current = this.head
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current
  }

  set(index, newVal) {
    var node = this.get(index)
    if (!node) return false
    node.val = newVal
    return true
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false

    if (index === this.length) {
      return !!this.push(val)
    }

    else if (index === 0) return !!this.unshift(val)

    const node = new Node(val)
    const before = this.get(index - 1)
    node.next = before.next
    before.next = node
    this.length++;
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) {
      return this.pop()
    }
    else if (index === 0) return this.shift(val)

    const before = this.get(index - 1)
    const removed = before.next
    before.next = removed.next
    this.length--;
    return removed
  }

  reverse(current = this.head) {
    if (!current) return true;
    this.reverse(current.next); // base case will give us the tail
    this.push(current.val); // we put the current node at the tail
    this.shift(); // we remove the current head
    // when call stack is empty, list is reversed
  }

}