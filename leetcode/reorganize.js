var reorganizeString = function(s) {
    const freq = {};
    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }
    const maxHeap = [];
    for (const [char, count] of Object.entries(freq)) {
        maxHeap.push([char, count]);
    }
    maxHeap.sort((a, b) => b[1] - a[1]);
    let result = '';
    let prev = null;
    while (maxHeap.length > 0) {
        const [char, count] = maxHeap.shift();
        result += char;
        if (prev) {
            maxHeap.push(prev);
        }
        prev = count > 1 ? [char, count - 1] : null;
        maxHeap.sort((a, b) => b[1] - a[1]);
    }
    return result.length === s.length ? result : '';
};
console.log(reorganizeString('aab')); 
