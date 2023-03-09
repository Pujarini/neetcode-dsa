export default class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }
  push(item) {
    this.top = this.top + 1;
    return this.items.push(item);
  }

  pop() {
    if (this.top === -1) {
      return;
    }
    this.top = this.top - 1;
    return this.items.pop();
  }
  peek() {
    return this.items[this.top];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    return this.items;
  }
}
