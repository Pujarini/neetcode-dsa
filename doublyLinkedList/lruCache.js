var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();

  this.head = {};
  this.tail = {};

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const curr = this.map.get(key);

    //delete the element from current position
    curr.next.prev = curr.prev;
    curr.prev.next = curr.next;

    //insert it before the tail element
    this.tail.prev.next = curr;
    curr.prev = this.tail.prev;
    curr.next = this.tail;
    this.tail.prev = curr;

    return curr.value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.get(key) !== -1) {
    this.tail.prev.value = value;
  } else {
    if (this.map.size === this.capacity) {
      //remove lru key from map
      this.map.delete(this.head.next.key);

      // update the first element
      this.head.next = this.head.next.next;
      this.head.next.prev = this.head;
    }

    let newNode = {
      key,
      value,
    };

    this.map.set(value, newNode);

    this.tail.prev.next = newNode;
    newNode.prev = this.tail.prev;
    newNode.next = this.tail;
    this.tail.prev = newNode;
  }
};

/**
 * 1. get --> check if key is present in map or not if not return -1
 * if present then remove the key from map and update the pos of element just before tail element
 * 2. put check if key return -1 if it doesn't then simply update the value of the element else check the size of map and capacity are rqual or not
 * 3. if equal then delete the element from map and delete th first element and update it to head.next
 * 4. create a new node add it to to map and add it bfeore tail element
 */
