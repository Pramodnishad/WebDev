// // Dynamic nature of objects


// let obj = {
//     age:25,
//     wt:65
// }

// console.log(obj)

// obj.color = "Yellow"
// obj.name = "Pramod"
// console.log(obj)


// cloning of object


let src = {
    age:25,
    wt:65
}

//  Using spread operator

// let destination ={...src}

//  destination.age = 50;

// Using Object.assign method 

// let destination = Object.assign({},src)

// destination.age = 500


// using Iteration method
let destination = {}


for(let key in src){
    let newKey = key
    let newVale = src[key]
     destination[newKey] = newVale
}

destination.age = 5000
console.log(src)
console.log(destination)