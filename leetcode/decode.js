var decodeString = function(s) {
    const numStack = []; 
    const strStack = []; 
    let currentStr = ''; 
    let currentNum = 0;  
    
    for (const char of s) {
        if (!isNaN(char)) {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            numStack.push(currentNum);
            strStack.push(currentStr);
            currentNum = 0;
            currentStr = '';
        } else if (char === ']') {
            const repeatTimes = numStack.pop();
            const lastStr = strStack.pop();
            currentStr = lastStr + currentStr.repeat(repeatTimes);
        } else {
            currentStr += char;
        }
    }
    
    return currentStr;
};

console.log(decodeString("3[a]2[bc]")); 
console.log(decodeString("3[a2[c]]"));