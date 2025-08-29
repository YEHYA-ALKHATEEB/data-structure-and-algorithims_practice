// Problem: Given an array, return a new array with all duplicate values removed.

// Example: removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5]) should return [1, 2, 3, 4, 5].

// Solution 1: Using a Set

// A Set is a data structure that only stores unique values. 
// This is by far the simplest and most
//  efficient way to solve this problem.

function removeDuplication(arr) {
    //  create a new Set from the array Which automatically removes duplicates.
    // then convert the set back to an array using the spread operator.
    return [... new Set(arr)];
}

console.log(removeDuplication([1, 2, 2, 3, 4, 4, 4, 5]))

// Solution 2: Using a filter and indexOf

// This approach works but is less efficient for large
//  arrays due to the indexOf method, which has
//  to iterate through the array for each element.
function removeDuplications(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplications([1, 2, 2, 3, 4, 4, 4, 5]))
