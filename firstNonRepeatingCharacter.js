// 4. Count the first non-repeating character

// Problem: Given a string, find the first character that
//  does not repeat. Return the character itself, or null if all characters repeat.

// Example: firstNonRepeatingChar("aabbcdeef") should
//  return "c". firstNonRepeatingChar("aabbcc") should return null.

// Solution: Using a Map (or a character count object)

// This is a two-pass approach. The first pass counts
//  the frequency of each character, and the second pass finds
//  the first character with a count of 1.

function firstNonRepeatingChar(str) {
    // 1. Create a frequency Map
    const charMap = new Map();
    for (const char of str) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    // 2. Iterate through the string again to find the first character with a count of 1
    for (const char of str) {
        if (charMap.get(char) === 1) {
            return char;
        }
    }

    //  3. if n none-repeating character is found.
    return null;
}

console.log('firstNonRepeatingChar', firstNonRepeatingChar('aabbcdeef'))