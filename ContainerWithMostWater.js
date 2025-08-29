// Container With Most Water (Two Pointers)

// Problem: Given an array of non-negative integers representing the
//  heights of vertical lines, find two lines that, together with the x-axis, form
//  a container that holds the most water.

// Example: maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) should return 49.

// Solution: Two Pointers (left and right)

// A brute-force approach would be O(n^2). The two-pointer solution
//  is O(n). The intuition is to start with the widest container and then 
//  iteratively move the pointer of the shorter line inward.

function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  
  while (left < right) {
    // Calculate the width of the container.
    const width = right - left;
    // The height of the container is determined by the shorter of the two lines.
    const containerHeight = Math.min(height[left], height[right]);
    
    // Calculate the current area and update the max.
    const currentArea = width * containerHeight;
    maxArea = Math.max(maxArea, currentArea);
    
    // Move the pointer of the shorter line inward.
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxArea;
}

console.log("maxArea",maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))