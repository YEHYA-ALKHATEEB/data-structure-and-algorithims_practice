// 1. Find Max/Min in an Array

// Problem: Given an array of numbers, find the maximum and minimum values.

// Example: findMinMax([3, 1, 4, 1, 5, 9, 2, 6]) should return { min: 1, max: 9 }.

// Solution 1: Using built-in methods (Math.max and Math.min)

// This is the most concise and readable way. The spread operator 
// (...) unpacks the array elements 
// as individual arguments for the Math functions.

function findMinMax(arr) {
    if (arr.length === 0) {
        return {min: null, max: null};
    }

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {'min': min, 'max': max};
}

console.log(findMinMax([3, 1, 4, 1, 5, 9, 2, 6]));


// Solution 2: Using a for loop

// This approach is good for interviews as it demonstrates a fundamental 
// understanding of 
// iteration and variable tracking.

function findMinMaxUsingForLoop(arr) {
    if (arr.length === 0) {
        return { min: null, max: null} ;
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1;  i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
                        console.log('min', min)

        }
        if(arr[i] > max) {
            max = arr[i];
            console.log('max', max)
        }
    }
    return {min, max}
}

console.log('findMinMaxUsingForLoop', findMinMaxUsingForLoop([3, 1, 4, 1, 5, 9, 2, 6]));