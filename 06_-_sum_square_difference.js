function sumOfSquares(n) {
    if (n === 1) { return 1 };
    return n * n + sumOfSquares(n - 1)
}

// console.log(sumOfSquares(10))

function squareOfSums(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum * sum;
}

// console.log(squareOfSums(10))

function difference(n){
    return squareOfSums(n) - sumOfSquares(n)
}

console.log(difference(100))