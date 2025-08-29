// 1. Count Frequency of Elements in an Array or String

// Problem: Given a collection (an array or a string), return a map or object containing
//  the frequency of each unique element.

// Example: countFrequency([1, 2, 2, 3, 1, 4]) should 
// return { '1': 2, '2': 2, '3': 1, '4': 1 }.

// Solution: Using a for...of loop and a Map

// A Map is a great choice here because it can handle any data
//  type as a key and provides clear get and set methods.

function contFrequency(arr) {
    const freqMap = new Map();
    for (const element of arr) {
        freqMap.set(element, (freqMap.get(element) || 0) + 1);
    }
    return freqMap;  //returns a Map object.
}

console.log(contFrequency([1, 2, 2, 3, 1, 4]));


// if the requirement is to return a plain object:
function countFrequencyAsObject(arr) {
    const freqObj = {};
    for (const element of arr) {
        freqObj[element] = (freqObj[element] || 0) + 1;
    }
    return freqObj; //returns a plain object
}

console.log(countFrequencyAsObject([1, 2, 2, 3, 1, 4]));

