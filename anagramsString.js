function areAnagrams(str1, str2){
    // Normalize strings (optional but good practice for robustness).
    const normalizedStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normalizedStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

    console.log('normalizedStr1', normalizedStr1);
    console.log('normalizedStr2', normalizedStr2);
    //  if the length are different, they can't be anagrams
    if(normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Sort and compare.
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    console.log('sortedStr1', sortedStr1);
    console.log('sortedStr2', sortedStr2);

   return sortedStr1 === sortedStr2;

}

console.log("areAnagrams", areAnagrams("listen", "silent"))



// ***************************
// Solution 2: Using a Map (or a character count object)

// This is a more efficient solution, especially for very long strings, 
// as it avoids the O(n log n)
//  complexity of sorting. The time complexity is O(n).

function areAnagramsUsingMap(str1, str2) {
    // Normalize strings and check length.
    const normalizedStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normalizedStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }

  // Create a character map for the first string.
  const charMap = {};
  for (let char of normalizedStr1) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  
  // Decrement counts for the second string.
  for (let char of normalizedStr2) {
    // If a character doesn't exist or its count is zero, they are not anagrams.
    if (!charMap[char]) {
      return false;
    }
    charMap[char]--;
  }
  
  // If we've reached this point, all counts should be zero.
  return true;

}

console.log("areAnagramsUsingMap", areAnagramsUsingMap("listen", "silent"))
