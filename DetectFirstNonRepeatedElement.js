function firstNonRepeatedElement(arr) {
  const freqMap = new Map();
  
  // Pass 1: Count frequencies
  for (const element of arr) {
    freqMap.set(element, (freqMap.get(element) || 0) + 1);
  }
  
  // Pass 2: Find the first element with a count of 1
  for (const element of arr) {
    if (freqMap.get(element) === 1) {
      return element;
    }
  }
  
  return null; // All elements repeat
}

console.log('firstNonRepeatedElement', firstNonRepeatedElement([4, 1, 2, 1, 2, 3, 4, 5]));