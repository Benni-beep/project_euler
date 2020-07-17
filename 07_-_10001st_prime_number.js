function primeCheck(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) { return false }
    }
    return true;
}

function nthPrimeNumber(n) {
    let primeNumbers = []
    for (let i = 2; primeNumbers.length < n; i++) {
        if (primeCheck(i)) { primeNumbers.push(i) }
    }
    return primeNumbers[primeNumbers.length-1];
}

console.log(nthPrimeNumber(10001))