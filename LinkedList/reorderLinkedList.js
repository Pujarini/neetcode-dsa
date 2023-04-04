var reorderList = function (head) {
  let mid = getMid(head);
  let reverseFromMid = reverseList(mid);
  reorderList(mid, reverseFromMid);
};

function reorderList(l1, l2) {
  let first = l1;
  let second = l2;
  let next = null;
  while (second.next) {
    next = first.next;
    first.next = second;
    first = next;

    next = second.next;
    second.next = first;
    second = next;
  }
}

function reverseList(head) {
  let prev = null;
  let curr = head;
  let temp = null;

  while (curr !== null) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
}

function getMid(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

/**
 * 45m
 * 87.45%
 * 1. split the linkedList into two lists by getting the midle of linkedList
 * 2. reverse the second list
 * 3. then merge the linkedList first of first list will point to first of first list and next will point to next of first list
 */
