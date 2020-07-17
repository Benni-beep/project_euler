// function triangularNumbersGenerator(x){
//     let triangularArray = [];
//     let triangularNumber = 0;
//     for (let i = 1; divisorArray.length <= x+1; i++) {
//         triangularNumber += i;
//         triangularArray.push(triangularNumber)    
//     }
// return triangularArray;
// }

// console.log(triangularNumbersGenerator(10))

function triangularNumbersDivisors() {
    let triangularNumber = 0;
    let divisorArray = [];
    for (let i = 1; divisorArray.length <= 500; i++) {

        divisorArray = [];
        triangularNumber += i;
        console.log("triangularNumber:",triangularNumber)

        for (let j = 1; j <= triangularNumber; j++) {
            if (triangularNumber % j === 0) {
                divisorArray.push(j);                
            }
        }        
    }

    return triangularNumber;
}


triangularNumbersDivisors();