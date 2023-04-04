let middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

/**
 * using hare and tortoise algorithm
 * 1. assign slow and fast to head
 * 2. slow moves by 1 step and fast by 2 steps
 * 3. until fast is null we will get the slow as the middle node
 * 69.37%
 * 6m
 */
