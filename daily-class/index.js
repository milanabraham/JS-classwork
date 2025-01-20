const productsEl = [
    {product : 'apple', price : 100},
    {product : 'banana', price : 200},
    {product : 'orange', price : 300},
]

const priceCheck = productsEl.filter(product => {
    if(product.price > 100){
        console.log(  `low price ${product.product} ${product.price}`);
        return true;
    }
});

console.log(priceCheck)