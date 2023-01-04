// 445. Add Two Numbers II

// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]

// Example 2:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [8,0,7]

// Example 3:
// Input: l1 = [0], l2 = [0]
// Output: [0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) { // l1 is the head of the first linked list, l2 is the head of the second linked list
//     const stack1 = []; // store the value of l1
//     const stack2 = []; // store the value of l2
//     while (l1) {
//         stack1.push(l1.val); // push the value of l1 into stack1
//         l1 = l1.next; // move to the next node
//     }
//     while (l2) {
//         stack2.push(l2.val); // push the value of l2 into stack2
//         l2 = l2.next; // move to the next node
//     }
//     let carry = 0; // carry
//     let head = null; // head of the result
//     while (stack1.length || stack2.length || carry) { // if stack1 is not empty or stack2 is not empty or carry is not 0
//         let sum = carry; // sum is the carry
//         if (stack1.length) sum += stack1.pop(); // if stack1 is not empty, add the value of stack1 into sum
//         if (stack2.length) sum += stack2.pop(); // if stack2 is not empty, add the value of stack2 into sum
//         const node = new ListNode(sum % 10); // create a new node with the value of sum % 10
//         node.next = head; // set the next of the node to the head
//         head = node; // set the head to the node
//         carry = Math.floor(sum / 10); // set the carry to the sum / 10
//     }
//     return head; // return the head
// };


var addTwoNumbers = function(l1, l2) {
    l1 = reverseLL(l1);
    l2 = reverseLL(l2);
    let carry = 0;
    let head = null;
    while (l1 || l2 || carry) {
        let sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        const node = new ListNode(sum % 10);
        node.next = head;
        head = node;
        carry = Math.floor(sum / 10);
    }
    return head;
};

const reverseLL = (head) => {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
