// function printNumbers(){
//     for(let i= 1; i<=100; i++){
//        console.log(i) 
//     }
// }
// printNumbers()

// function printNumbers(num){
//     console.log(num)
// }
// printNumbers(5)


//  Write a function to print table for given number using for loop
// function printTable(num){
//     for(let i = 1; i<=10; i++){
//         console.log(`${num} x ${i} = ${num * i}`)
//     }
// }
// printTable(100)

//  Write a function to print table for given number using while loop

// function printTable(num) {
//     console.log(`\n Table of ${num}`)
//     let i = 1;

//     while (i <= 10) {
//         console.log(`${num} x ${i} = ${num * i}`)
//         i++;
//     }

// }

// printTable(5)

//  Write a function to print table for given number using do while loop

// function printTable(num){
//     console.log(`\n Table of ${num}`)
//     let i = 1;
//     do{
//         console.log(`${num} x ${i} = ${num * i}`)
//         i++
//     } while(i<=10)
// }

// printTable(5)


// Write a function to find odd and even numbers 

// function numberCategory(num) {
//     if (num % 2 == 0) {
//         console.log(`${num} is Even number`)
//     } else
//         console.log(`${num} is Odd number`)
// }

// numberCategory(120)


//  Write a function to find average of two number

// function averagefinder(num1,num2){
//     let avg = (num1+num2)/2
//     console.log(avg)
// }
// averagefinder(10,200)


//  Function with return keywords

// function addNum(a, b, c){
//     let ans = a+b+c;
//     return ans;
// }

// const result = addNum(5,10,15)

// console.log(result)


// function getName(firstName, lastName){
//     let myName = firstName + " " + lastName
//     return myName;
// }
// let fullName = getName("Pramod", "Nishad")
// console.log(fullName)



// Unreachable statements
// function getName(firstName, lastName){
//     let myName = firstName + " " + lastName
//     return myName;


    // after return code will not be reachable 
    // a = 10;
    // b = 20
    // sum = a+b
// }
// let fullName = getName("Pramod", "Nishad")
// console.log(fullName)


// Function Expressions

// const getMultiply = function(a,b){
//     return a*b
// }

// let ans = getMultiply(5,10)

// console.log(ans)

// const getSquare = function(a){
//     return a**2
// }

// let ans = getSquare(5)
// console.log(ans)

// const getExpo = function(a,b){
//     return a**b
// }

// let ans = getExpo(2,5)
// console.log(ans)

// const getExpo = (a,b) =>{
//     return a**b
// }
// let ans = getExpo(2,5)
// console.log(ans)