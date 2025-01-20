const smallestMultiple = function(nums){
    if(nums % 2 == 0){
        return nums;
    }else{
        return nums * 2;
    }
}

console.log(smallestMultiple(2))