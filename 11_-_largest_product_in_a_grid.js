// What is the greatest product of four adjacent numbers 
// in the same direction (up, down, left, right, or diagonally) 
// in the 20×20 grid?

"use strict"
const fs = require('fs');
const input = fs.readFileSync('./11_-_largest_product_in_a_grid.txt', { encoding: 'utf8' }).split("\r\n").map(str => str.split(" ")).map(arr => arr.map(str => parseInt(str)));

const product = (arr) => arr.reduce((a, b) => a * b, 1);

const rightArray = (arr, y, x) => arr[y].slice(x, 4);

function upperRightArray(arr, y, x) {
    let upperRightArr = []
    for (let i = 0; i < 4; i++) {
        upperRightArr.push(arr[y - i][x + i])
    }
    return upperRightArr;
}

function lowerRightArray(arr, y, x) {
    let lowerRightArr = []
    for (let i = 0; i < 4; i++) {
        lowerRightArr.push(arr[y + i][x + i])
    }
    return lowerRightArr;
}

function downArray(arr, y, x) {
    let downArr = []
    for (let i = 0; i < 4; i++) {
        downArr.push(arr[y + i][x])
    }
    return downArr;
}

function scanArray(arr) {
    let productArray = [];

    for (let y = 0; y < arr.length; y++) {
        let line = arr[y];

        // yellow
        for (let x = 0; y < 3 && x < line.length - 3; x++) {
            productArray.push(
                product(rightArray(arr, y, x)),
                product(lowerRightArray(arr, y, x)),
                product(downArray(arr, y, x))
            )
        }

        // pink
        for (let x = arr[y].length - 3; x < line.length && y < arr.length - 3; x++) {
            productArray.push(
                product(downArray(arr, y, x))
            )
        }

        //orange
        for (let x = 0; y > 2 && y < arr.length - 3 && x < line.length - 3; x++) {
            productArray.push(
                productArray.push(
                    product(upperRightArray(arr, y, x)),
                    product(rightArray(arr, y, x)),
                    product(lowerRightArray(arr, y, x)),
                    product(downArray(arr, y, x))
                )
            )
        }

        //red
        for (let x = 0; y > arr.length - 4 && x < line.length - 3; x++) {
            productArray.push(
                product(rightArray(arr, y, x)),
                product(upperRightArray(arr, y, x)),
            )
        }

    }
    return productArray.reduce((a, b) => a > b ? a : b);
}

console.log(scanArray(input))

/**
 * alt: arrays von startpositionen für jede Funktion aufbauen, die dann über input gelegt wird
 * higher order: function product(arr, f), wobei f (upArray, downArray, ...) mit switch ausgewählt wird
 */