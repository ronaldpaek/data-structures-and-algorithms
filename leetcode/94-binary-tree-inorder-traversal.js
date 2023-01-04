// 94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// Iterative solution
// time complexity: O(n)
// space complexity: O(n)

var inorderTraversal = function(root) { // root is the root node of the binary tree
    const result = []; // store the result
    const stack = []; // store the node
    let current = root; // current node
    while (current || stack.length) { // if current node is not null or stack is not empty
        while (current) { // if current node is not null
            stack.push(current); // push the current node into stack
            current = current.left; // move to the left child
        }
        current = stack.pop(); // pop the node from stack
        result.push(current.val); // push the value of the node into result
        current = current.right; // move to the right child
    }
    return result; // return the result
};
