//  Move Zeros to End of Array (Two Pointers)

// Problem: Given an array, move all 0's to the end of it while 
// maintaining the relative order of the non-zero elements.

// Example: moveZeros([0, 1, 0, 3, 12]) should modify the array to [1, 3, 12, 0, 0].

// Solution: Two Pointers (writePointer and readPointer)

// This is a classic in-place algorithm. One pointer (readPointer) iterates 
// through the entire array, while a second pointer (writePointer) only 
// moves when a non-zero element is found.

function moveZeros(arr) {
  let writePointer = 0;
  
  // 1. Iterate through the array with the readPointer.
  for (let readPointer = 0; readPointer < arr.length; readPointer++) {
    // 2. If the current element is not a zero, move it to the writePointer's position.
    if (arr[readPointer] !== 0) {
      arr[writePointer] = arr[readPointer];
      writePointer++;
    }
  }
  
  // 3. Fill the rest of the array (from the writePointer's position) with zeros.
  for (let i = writePointer; i < arr.length; i++) {
    arr[i] = 0;
  }
  
  return arr; // Return the modified array
}

console.log('moveZeros', moveZeros([0, 1, 0, 3, 12]));
