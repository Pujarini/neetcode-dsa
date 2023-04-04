var mergeTwoLists = function (list1, list2) {
  let temp_node = new ListNode();
  let curr_node = temp_node;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr_node.next = list1;
      list1 = list1.next;
    } else {
      curr_node.next = list2;
      list2 = list2.next;
    }
    curr_node = curr_node.next;
  }
  if (list1 != null) {
    curr_node.next = list1;
    list1 = list1.next;
  }
  if (list2 != null) {
    curr_node.next = list2;
    list2 = list2.next;
  }
  return temp_node.next;
};

/**
 * the output linkedList is empty so we assign a dummy node to the list
 * 1. check if list1 value < list2 value then curr_node.next = list1 and list1 --> list1.next else curr_node.next = list2 and list2 ---> list2.next
 * 3. check if ant list has not exhausted then add it to curr_node.next
 * 4. return the temp_node
 * 33 mins
 */
