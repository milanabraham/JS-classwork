function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const count = {};
    for (const char of str1) {
        count[char] = (count[char] || 0) + 1;
    }
    for (const char of str2) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }
    return Object.values(count).every(value => value === 0);
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world")); 
