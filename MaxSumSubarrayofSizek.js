// Sliding Window & Two Pointers - Example Problems and Solutions

// 1. Max Sum Subarray of Size k (Sliding Window)

// Problem: Given an array of integers and a number k, find the maximum sum 
// of a subarray of size k.

// Example: maxSumSubarray([2, 1, 5, 1, 3, 2], 3) should return 9. The
//  subarray [5, 1, 3] has the max sum.

// Solution: Sliding Window

// A naive approach would be to calculate the sum of every possible
//  subarray of size k, which would be O(n * k) or O(n^2). The sliding
//  window technique solves this in O(n).

function maxSumSubarray(arr, k) {
  if (k > arr.length) {
    return null;
  }
  
  let windowSum = 0;
  let maxSum = 0;
  let windowStart = 0;
  
  // 1. Calculate the sum of the first window.
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // 2. Slide the window from the second element.
  for (let windowEnd = k; windowEnd < arr.length; windowEnd++) {
    // Add the new element entering the window.
    windowSum += arr[windowEnd];
    // Subtract the element leaving the window.
    windowSum -= arr[windowStart];
    // Slide the window forward.
    windowStart++;
    
    // Update the max sum.
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}

console.log('maxSumSubarray', maxSumSubarray([2, 1, 5, 1, 3, 2], 3))