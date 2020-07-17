// The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. 
// What is the value of this product?
"use strict"
const fs = require('fs');
const rawInput = fs.readFileSync('./08_-_largest_product.txt', {encoding: 'utf8'}).split("\r\n").reduce((str1, str2) => str1.concat(str2)).split("").map(str => parseInt(str, 10))


function product(arr) {
    return arr.reduce((n1, n2) => n1 * n2)
}

function scanArray(arr) {

    let largestProduct = -Infinity;

    for (let i = 0; i < arr.length - 12; i++) {
        let window = arr.slice(i, i + 13)

        let prod = product(window);

        if (prod > largestProduct) { largestProduct = prod }
    }
    return largestProduct;
}

console.log(scanArray(rawInput))