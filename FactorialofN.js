// 1. Factorial of n

// Problem: Find the factorial of a non-negative integer n. The factorial of
//  n is the product of all positive integers less than or equal to n.

// Example: factorial(4) should return 24 (since 4 * 3 * 2 * 1 = 24).

// Solution 1: Recursive

// The base case is n = 0 or n = 1, where the factorial is 1. The recursive 
// step is n * factorial(n - 1).

function factorialRecursive(n) {
  // Base case
  if (n < 0) {
    return null; // Or throw an error for invalid input
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive step
  return n * factorialRecursive(n - 1);
}
console.log('factorialRecursive', factorialRecursive(4));

// *********************88
// Solution 2: Iterative

// This is often more efficient for large numbers as it avoids the overhead
//  of function calls on the call stack.
function factorialIterative(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  }
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}