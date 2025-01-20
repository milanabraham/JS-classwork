function isPalindrome(s) {
    // Filter out non-alphanumeric characters and convert to lowercase
    const filteredStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the string is equal to its reverse
    const reversedStr = filteredStr.split('').reverse().join('');
    
    return filteredStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));