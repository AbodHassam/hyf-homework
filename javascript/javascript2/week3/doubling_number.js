/* let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6] */


let numbers = [];
for (let i =1 ; i < 40; i++) {
    const num = numbers.push(i);  
}

console.log('%cArray of numbers','font-weight:bold;color:red');
console.log(numbers);

const oddNumbers = numbers.filter(numbers => numbers % 2 !==0);
//console.log(oddNumbers);
let doubledNumbers = oddNumbers.map(oddNumbers => oddNumbers * 2);

console.log('%cDoubled odd numbers','font-weight:bold;color:red');
console.log("The doubled numbers are", doubledNumbers);
