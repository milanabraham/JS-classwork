var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false;
    }
    let first = s.split('').sort().join('');
    let second = t.split('').sort().join('');
    return first === second;
};

console.log(isAnagram("anagram", "nagaram")) 
console.log(isAnagram("rat", "car"))