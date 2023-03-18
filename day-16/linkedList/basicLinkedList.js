class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var curr = this.head;
    var newTail = curr;
    while (curr.next) {
      // runs until second last node
      newTail = curr;
      curr = curr.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }
  shift() {
    if (!this.head) return undefined;
    var temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return temp;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var curr = this.head;
    var counter = 0;
    while (counter !== index) {
      curr = curr.next;
      counter++;
    }
    return curr;
  }
}

var list = new SinglyLinkedList();
list.push("node1");
list.push("node2");
list.push("node3");
list.push("node4");
list.push("node5");
list.pop();
list.pop();
list.shift();
list.unshift("node0");
console.log(list.get(2));

console.log(list);
