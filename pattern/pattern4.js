let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = i; j >= 1; j--) {
    row += j + " ";
  }
  console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
  let row = "";
  for (let j = i; j >= 1; j--) {
    row += j + " ";
  }
  console.log(row);
}
