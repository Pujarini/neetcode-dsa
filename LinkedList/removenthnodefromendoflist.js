var removeNthFromEnd = function (head, n) {
  //1h06m with 20 mins break 10%
  // create a dummy node which will give the curr head
  //   const dummyNode = new ListNode();
  //   dummyNode.next = head;
  //   // assign 2 pointers
  //   let slow = dummyNode;
  //   let fast = dummyNode;
  //   //move the fast pointer by n+1 pos (diff b/w slow and fast pointer)
  //   for (let i = 1; i <= n + 1; i++) {
  //     fast = fast.next;
  //   }
  //   // move the pointer slow and fast by 1 pos
  //   while (fast) {
  //     slow = slow.next;
  //     fast = fast.next;
  //   }
  //   // remove the node at n pos
  //   slow.next = slow.next.next;
  //   return dummyNode.next;

  //38.99%
  const length = findlengthFromEnd(head, n);

  if (length < 0) return head.next;
  const curr = moveNode(head, length);

  curr.next = curr.next.next;

  return head;
};

function findlengthFromEnd(curr, n, length = 0) {
  while (curr) {
    curr = curr.next;
    length++;
  }

  return length - n - 1;
}

function moveNode(curr, length) {
  while (length) {
    curr = curr.next;
    length--;
  }
  return curr;
}

/**
 * 1st algo
 * 1.  create a dummy node pointing to head
 * 2. take two pointers slow and fast
 * 3. move the fast ptr such that diff b/w slow and fast ptr would be n+1
 * 4. move the slow and fast ptr by 1 until fast = null;
 * 5. your slow ptr would at n.prev pos so delete that node by pointing slow.next --> slow.next.next
 * 6 return the dummy.next
 *
 * 2nd algo
 * 1. find the lenth of the node from end by counting the node and return length - n -1
 * 2. check if length < 0 if it is point then return head.next else
 * 3. find the pos of pos before the nth node uding length and head decrease length - 1 until it is 0 and you find the node bfore nth node
 * 4. delete the node curr.next = curr.next.next
 * 5 . return head
 */
