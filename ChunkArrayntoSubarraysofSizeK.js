// 4. Chunk Array into Subarrays of Size K

// Problem: Given an array and a positive integer k, chunk the array into smaller arrays
//  of size k. The last chunk may be smaller than k.

// Example: chunkArray([1, 2, 3, 4, 5, 6, 7], 3) should 
// return [[1, 2, 3], [4, 5, 6], [7]].

// Solution: Using a while or for loop with slice

// This is a classic iterative approach. We repeatedly take 
// a slice of the original array and push it into our result array.

function chunkArray(arr, k) {
    const result = [];
    let index = 0;
    while (index < arr.length) {
        //  slice a subarray of size k starting from current index.
        const chunk = arr.slice(index, index + k);
        result.push(chunk);
        // Move the index forward by k
        index += k;
    }
    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))