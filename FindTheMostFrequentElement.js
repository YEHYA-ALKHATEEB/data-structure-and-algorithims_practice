function mostFrequentElement(arr) {
  if (arr.length === 0) {
    return null;
  }
  
  const freqMap = new Map();
  for (const element of arr) {
    freqMap.set(element, (freqMap.get(element) || 0) + 1);
  }
  
  let maxCount = 0;
  let mostFrequent = null;
  
  // Iterate through the Map entries (key-value pairs).
  for (const [element, count] of freqMap.entries()) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequent = element;
    }
  }
  
  return mostFrequent;
}

console.log(mostFrequentElement([1, 3, 2, 1, 3, 1, 4]))