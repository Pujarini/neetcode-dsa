var reverseList = function (head) {
  //iteratively 62.31%
  //   let prev = null;
  //   let curr = head;
  //   let next = null;
  //   while (curr !== null) {
  //     let temp = curr.next;
  //     curr.next = prev;
  //     prev = curr;
  //     curr = temp;
  //   }
  //   return prev;
  //recursively (not very very clear)
  if (head === null || head.next === null) {
    return head;
  }

  let newHead = reverseList(head.next);
  let newNext = head.next;
  newNext.next = head;
  head.next = null;
  return newHead;
};

/**
 * 1. take 2 pointers curr and prev
 * 2. point curr --> head
 * 3. store the next node in a temp variable (without reverse) for the reference
 * Do it until curr == null
 * 4. Now reverse is point the curr.next --> prev
 * 5. prev --> curr
 * 6. curr --> temp
 * 7. return the prev
 */
