// 530. Minimum Absolute Difference in BST

// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

// Example 1:
// Input: root = [4,2,6,1,3]
// Output: 1

// Example 2:
// Input: root = [1,0,48,null,null,12,49]
// Output: 1

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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let min = Infinity; // minimum difference
    let prev = null; // previous node
    const traverse = (node) => { // in-order traversal
        if (node === null) return; // base case
        traverse(node.left); // left
        if (prev !== null) { // right
            min = Math.min(min, node.val - prev); // update min
        }
        prev = node.val; // update prev
        traverse(node.right); // right
    }
};
