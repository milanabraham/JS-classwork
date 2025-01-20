// program to find the largest country by name

function maxCountry(arr){
    let maxCountryLength = '';
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].length > maxCountryLength.length){
            maxCountryLength = arr[i];
        }
    }
    return maxCountryLength;
}
console.log(maxCountry(["united states","india","france"]))