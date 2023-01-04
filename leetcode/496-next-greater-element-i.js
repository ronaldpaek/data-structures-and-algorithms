// 496. Next Greater Element I

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.



// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// brute force
// m * n time complexity
// m is the length of nums1
// n is the length of nums2

var nextGreaterElement = function(nums1, nums2) {
    return nums1.map(num => {
        const index = nums2.indexOf(num);
        for (let i = index + 1; i < nums2.length; i++) {
            if (nums2[i] > num) {
                return nums2[i];
            }
        }
        return -1;
    });
};

// stack
// m + n time complexity
// m is the length of nums1
// n is the length of nums2
// space complexity: O(n)

var nextGreaterElement = function(nums1, nums2) {
    const map = new Map(); // key: num, value: next greater element
    const stack = []; // store the num in nums2
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length && nums2[i] > stack[stack.length - 1]) { // if the num in nums2 is greater than the num in stack, then the num in stack has next greater element
            map.set(stack.pop(), nums2[i]); // store the next greater element in map
        }
        stack.push(nums2[i]); // push the num in nums2 into stack
    }
    return nums1.map(num => map.get(num) || -1); // return the next greater element of num in nums1
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));
console.log(nextGreaterElement([2,4], [1,2,3,4]));
console.log(nextGreaterElement([1,3,5,2,4], [6,5,4,3,2,1,7]));
