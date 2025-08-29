function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    // Check if the complement exists in our map.
    if (map.has(complement)) {
      // If it exists, we've found our pair.
      return [map.get(complement), i];
    }
    // If not, add the current number and its index to the map.
    map.set(nums[i], i);
  }
  return []; // Should not be reached based on the problem description
}

console.log(twoSum([2, 7, 11, 15], 9));