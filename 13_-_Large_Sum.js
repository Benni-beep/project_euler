"use strict"
const fs = require('fs');
console.log(
    fs.readFileSync('./13_rawInput.txt', { encoding: 'utf8' }).split("\r\n").map(str => parseInt(str)).reduce((a, b) => a + b)
)
