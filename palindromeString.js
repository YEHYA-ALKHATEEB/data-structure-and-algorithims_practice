function isPalindrome(str) {
    // 1. Normalize the string:
    // - Convert to lowercase.
    //  - Remove non-alphanumeric charachters using reqular expression
    const  normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log('normalizedStr',normalizedStr);
    // 2. Reverse the normalized string.
    const reversedStr = normalizedStr.split('').reverse().join('');
    console.log('reversedStr', reversedStr)
    // 3. compare the original normalized string with the reverse one.
    
    return normalizedStr === reversedStr;
}

console.log('isPalindrome', isPalindrome('A man, a plan, a canal: Panama'))