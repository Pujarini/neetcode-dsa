class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    console.log("pushed");
    var newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    var temp = this.first;
    this.first = newNode;
    this.first.next = temp;
    return ++this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    --this.size;

    return temp.value;
  }
}
