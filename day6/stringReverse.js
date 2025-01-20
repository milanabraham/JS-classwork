function stringReverse(str){
    let reverse = '';
    for(let r = str.length - 1 ; r >= 0 ; r--){
        reverse += str[r];
    }
    return reverse;
}

console.log(stringReverse("milan"))