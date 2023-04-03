var reverseList = function (head) {
  // iteratively 61.71%  O(n)
  // let curr = head;
  // let prev = null;
  // let temp = null;
  // while (curr !== null) {
  //   temp = curr.next;
  //   curr.next = prev;
  //   prev = curr;
  //   curr = temp;
  // }
  // return prev;
  //recursively 34.67%
  if (head?.next == null) {
    return head;
  }
  const prev = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return prev;
};

/**
 * iteratively
 * 1. take 2 pointers curr and prev
 * 2. point curr --> head
 * 3. store the next node in a temp variable (without reverse) for the reference
 * Do it until curr == null
 * 4. Now reverse is point the curr.next --> prev
 * 5. prev --> curr
 * 6. curr --> temp
 * 7. return the prev
 *
 * recursively
 * 1. base case until head.next is null make it the head;
 * 2. recursive call head.next and store it in prev
 * 3. make head.next.next = head ; breaks the link and reverses it
 * 4. makes head.next = null
 * 5. return prev;
 */
