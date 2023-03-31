var MinStack = function () {
  this.items = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.items.push({
    value: val,
    min: this.items.length === 0 ? val : Math.min(val, this.getMin()),
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.items.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.items.length === 0) return -1;
  return this.items[this.items.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.items.length === 0) return -1;
  return this.items[this.items.length - 1].min;
};
var obj = new MinStack();
// obj.push(5);

obj.pop();
var param_3 = obj.top();
console.log(param_3);

var param_4 = obj.getMin();
console.log(param_4);

console.log(obj);

/**
 * 11 mins
 */
