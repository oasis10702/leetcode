/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
 *
 * https://leetcode.com/problems/odd-even-linked-list/description/
 *
 * algorithms
 * Medium (51.27%)
 * Likes:    1235
 * Dislikes: 269
 * Total Accepted:    200.8K
 * Total Submissions: 384.7K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given a singly linked list, group all odd nodes together followed by the
 * even nodes. Please note here we are talking about the node number and not
 * the value in the nodes.
 *
 * You should try to do it in place. The program should run in O(1) space
 * complexity and O(nodes) time complexity.
 *
 * Example 1:
 *
 *
 * Input: 1->2->3->4->5->NULL
 * Output: 1->3->5->2->4->NULL
 *
 *
 * Example 2:
 *
 *
 * Input: 2->1->3->5->6->4->7->NULL
 * Output: 2->3->6->7->1->5->4->NULL
 *
 *
 * Note:
 *
 *
 * The relative order inside both the even and odd groups should remain as it
 * was in the input.
 * The first node is considered odd, the second node even and so on ...
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head) return null;
  if (!head.next) return head;

  let oddTail = head;
  let evenHead = head.next;
  let evenTail = head.next;

  while (oddTail.next && oddTail.next.next) {
    oddTail.next = oddTail.next.next;
    oddTail = oddTail.next;
    if (evenTail.next && evenTail.next.next) {
      evenTail.next = evenTail.next.next;
      evenTail = evenTail.next;
    } else {
      evenTail.next = null;
    }
  }

  oddTail.next = evenHead;

  return head;
};
// @lc code=end
