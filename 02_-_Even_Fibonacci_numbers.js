function fibonacci(){
    let array = [1,2]
    for (let i = 0; array[array.length-1] + array[array.length-2] <= 4000000; i++) {
        array.push(array[array.length-1] + array[array.length-2]);        
    }
    return array;
}

function evenFibonacciNumbers(fibonacci){    
    let evenArray = [];
    for (n of fibonacci){
        if (n % 2 == 0) {evenArray.push(n)}
    }
    return evenArray;
}

function sumEvenFibonacciNumbers(evenFibonacciNumbers){
    let sum = 0;
    for (n of evenFibonacciNumbers) { sum += n}
    return sum;
}

console.log(sumEvenFibonacciNumbers(evenFibonacciNumbers(fibonacci())))