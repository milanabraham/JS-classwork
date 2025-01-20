function arrayIntersection(nums1, nums2) {
    const set1 = new Set(nums1); 
    const result = new Set(); 

    for (const num of nums2) {
        if (set1.has(num)) {
            result.add(num);
        }
    }

    return Array.from(result); 
}

console.log(arrayIntersection([1, 2, 2, 1], [2, 2]));
