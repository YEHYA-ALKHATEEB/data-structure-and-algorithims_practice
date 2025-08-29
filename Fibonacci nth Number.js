// Problem: Given a number n, find the nth number in the Fibonacci sequence.
//  The sequence starts with 0 and 1, and each subsequent number is the sum of
//   the two preceding ones.

// Example: fibonacci(6) should return 8 (since the sequence is 0, 1, 1, 2, 3, 5, 8, ...).

// Solution 1: Recursive

// The base cases are fib(0) = 0 and fib(1) = 1. The recursive step is fib(n)
//  = fib(n-1) + fib(n-2). Warning: This is highly inefficient due to repeated 
//  calculations. A memoized
//  recursive solution is better.

// This version is for demonstration of the recursive concept.
// It is very slow for large n.
function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}