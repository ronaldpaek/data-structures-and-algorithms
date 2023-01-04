// 263. Ugly Number

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.


// Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
// Example 3:

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) return false; // 0 is not ugly
    if (n === 1) return true; // 1 is ugly
    if (n % 2 === 0) return isUgly(n / 2); // if n is divisible by 2, divide n by 2 and check again
    if (n % 3 === 0) return isUgly(n / 3); // if n is divisible by 3, divide n by 3 and check again
    if (n % 5 === 0) return isUgly(n / 5); // if n is divisible by 5, divide n by 5 and check again
    return false; // if n is not divisible by 2, 3, or 5, it is not ugly
};

