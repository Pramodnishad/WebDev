// myName()

// function myName(){
//     console.log(myName)
// }
// var  myName = function(){
//     console.log("Pramod")
// }

// sayHello()
// var sayHello = function(){
//     console.log("Hello pramod")
// }


// Variable hoisting

// console.log(num)===>// undefined
// var num = 3
// console.log(num)
// let num = 3
// console.log(num)
// const num = 3


//  Class and object


// class Human{

// }

// const obj = new Human()

// const obj = new Human()
// class Human{

// }

//  so without declaring class object can not be accessed



//  Constructor

// class Student {
//     constructor(name,roll){
//         this.name=name
//         this.roll=roll
//     }
//     showStudent(){
//         console.log(`name is ${this.name} and student roll no:${this.roll}`)
//     }
// }

// const s1 = new Student("Pramod Nishad", 101)

// s1.showStudent()



// function as a expressions

// const greet = function(){
//     console.log("Pramod")
//     }

// greet()



// Function as a parameter

// function greetMe(greet, fullName){
//     console.log("hello",fullName)
//     greet()
// }

// const greet = function(){
//     console.log("Pramod")
//     }


// greetMe(greet, "NishadRaj")


//  Return a function in a function

// function sovle(number){
//     return function(number){
//         return number*number
//     }
// }

// let ans = sovle()

// let final = ans(10)

// console.log(final)


//  To store function in data structure

// const arr = [
//     function(a,b){
//         return a+b
//     },
//     function(a,b){
//         return a-b
//     },
//     function(a,b){
//         return a*b
//     }
// ]


// let first = arr[0]
// let ans = first(10,5)
// console.log(ans)

// let first = arr[1]
// let ans = first(10,5)
// console.log(ans)

// let first = arr[2]
// let ans = first(10,5)
// console.log(ans)