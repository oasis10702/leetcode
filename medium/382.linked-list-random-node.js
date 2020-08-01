/*
 * @lc app=leetcode id=382 lang=javascript
 *
 * [382] Linked List Random Node
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head;
  this.size = 0;

  while (head) {
    head = head.next;
    this.size++;
  }
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  const random = Math.floor(Math.random() * this.size);
  let node = this.head;
  let i = 0;

  while (node) {
    if (i >= random) return node.val;

    node = node.next;
    i++;
  }

  return node.val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
// @lc code=end
