// Problem 1: reverse a string

// reverse string using for loop
// Problem: Given a string, return a new string with the characters in reverse order.

// Example: reverseString("hello") should return "olleh".

// Solution 1: Using built-in methods (split, reverse, join)

// This is the most common and concise approach in JavaScript.

function reverseString(str) {
    // split the string into an array of characters
    const arr = str.split('');
    console.log('splitted', arr);
    arr.reverse();
    console.log('reversed arr', arr);
    arr.join('');
    console.log('join array', arr.join(''));
    return str.split('').reverse().join('');
}


console.log("--- Testing reverseString ---");
console.log(reverseString('hello'));


// Solution 2: Using a for loop

// This approach can be useful for interviews to demonstrate a
//  fundamental understanding of iteration without relying on built-in methods

console.log('reverse string using for loop');
function reverseStringWithForLoop(str) {
    let reversedStr = '';
    // loop from the last character to the first.
    for(let i = str.length -1; i>=0; i--) {
        reversedStr += str[i];
    }
   console.log('reversedStr', reversedStr);
   return reversedStr;
}

console.log('reverseStringWithForLoop', reverseStringWithForLoop('Hello'));