function solve(input){
    let inputLenght = input.length / 2
    let finalResult = input.substring(inputLenght)
    console.log(finalResult);
}
solve('abcba')

function solve2(input){
    let result = Math.sqrt(input)
    console.log(result);
}
solve2(9)

function solveThree(input){
    let arr = []
    for(let i =0; i< input.length; i++){
        arr.push(input[i] * input[i])
    }
    console.log(arr);
}
solveThree([1, 2, 3, 4, 5])

function isPrime(num) {
    for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
    return num > 1;
    }
console.log(isPrime(4));

