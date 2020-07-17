//  Find the sum of all the multiples of 3 or 5 below 1000.

function arrayConstruct(){
    let array = [];
    for (let i = 1; i < 1000; i++) {
        array.push(i)
    }
    return array;
};

function fizzBuzz(arrayConstruct){
    let fizzBuzzArray = [];
    for (n of arrayConstruct){
        if (n % 3 == 0 || n % 5 == 0) fizzBuzzArray.push(n);
    }
    return fizzBuzzArray;
}

function fizzBuzzSum(fizzBuzz){
    let sum = 0;
    fizzBuzz.forEach(n => { sum += n });
    return sum;
}

console.log(fizzBuzzSum(fizzBuzz(arrayConstruct())))