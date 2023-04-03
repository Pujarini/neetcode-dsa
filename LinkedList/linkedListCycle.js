var hasCycle = function (head) {
  // O(N)
  //   let set = new Set();
  //   while (head) {
  //     if (set.has(head)) return true;
  //     set.add(head);
  //     head = head.next;
  //   }
  //   return false;
  // Hare and tortoise algortithm O(1) 82.25%
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    const hasCycle = slow == fast;
    if (hasCycle) return true;
  }
  return false;
};

/**
 * 1. O(N) solution take a hashset
 * 2. so in a cycle if a node is visited again then cycle exists else doesn't exist
 * 3. so we create a hashset and push the node into the hashset
 * 4. check if the head is in hashset or not else add it in hashset
 * 5. if present in hashset then cycle else no cycle
 *
 * hare and tortoise algo
 * 1. take two pointer slow and fast
 * 2. Run the loop until fast.next is null which will not be in case of cycle
 * 2. slow will move by 1 and fast will move by 2 steps
 * 3. if slow == fast then cycle exists else no cycle
 */
