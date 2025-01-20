const prompt = require('prompt-sync')();
let calculator = {
    read() {
        this.a = +prompt('Enter first number', 0);
        this.b = +prompt('Enter second number', 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
}
calculator.read();
console.log("sum " + calculator.sum());
console.log("product " + calculator.mul());