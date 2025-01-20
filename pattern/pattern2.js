let n = 5;

for (let i = n; i >= 1; i--) {
  let row = "";

  for(let j = i ; j < n ; j++){
    row += "  "
  }
  
  for (let j = 1; j < (2 * 1 - 1); j++) {
    row += j + " ";
  }
  console.log(row); 
}