const numConcat = function(n) {
    let result = [];
    for(let i = 0 ; i < n.length ; i++){
        result[i] = n[i];
        result[i + n.length] = n[i];
    }
    return result;
}

console.log(numConcat([1,2,3,4,5])); 

// another way to solve the problem

/*
const duplicateNum = function(nums){
    let res = [];
    for(let i = 0 ; i < nums.length; i++){
        res[i] = nums[i];
    }
    for(let i = 0 ; i < nums.length ; i++){
        res.push(nums[i]);
    }
    return res;
} 

console.log(duplicateNum([2,5,9,6,3,5,3,5])) */