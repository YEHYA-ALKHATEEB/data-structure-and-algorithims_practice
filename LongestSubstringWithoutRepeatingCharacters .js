// Longest Substring Without Repeating Characters (Sliding Window)

// Problem: Given a string, find the length of the longest substring without
//  repeating characters.

// Example: lengthOfLongestSubstring("abcabcbb") should return 3 
// (for "abc"). lengthOfLongestSubstring("pwwkew") should return 3 (for "wke").

// Solution: Sliding Window with a Map

// We'll use a Map to keep track of the characters we've seen in the
//  current window and their last seen index.

function lengthOfLongestSubstring(str) {
  if (str.length === 0) {
    return 0;
  }
  
  let windowStart = 0;
  let maxLength = 0;
  const charMap = new Map();

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    
    // If the character is already in our map and is within the current window,
    // move the start of the window past the last seen index of that character.
    if (charMap.has(rightChar) && charMap.get(rightChar) >= windowStart) {
      windowStart = charMap.get(rightChar) + 1;
    }
    
    // Add or update the character's index.
    charMap.set(rightChar, windowEnd);
    
    // Calculate the current window length and update the max length.
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  
  return maxLength;
}

console.log('lengthOfLongestSubstring', lengthOfLongestSubstring("abcabcbb"))