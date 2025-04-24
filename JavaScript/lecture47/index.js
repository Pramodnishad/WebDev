class Human {
    age=25;
    // wieght=65
    #wieght=65  // to make any variable private use # keyword and will be accessible within same block
    ht=1.8

    walking(){
        console.log("Can walk" ,this.#wieght)
    }
    #running(){
        console.log("Can run")
    }

    get fetchWeight(){
        return this.#wieght
    }

    set modifyWieght(val){
        this.#wieght = val
    }
    get runningFetcher(){
        return this.#running
    }

}

let obj= new Human()

// console.log(obj.fetchWeight)
obj.modifyWieght = 100
console.log(obj.fetchWeight)

// obj.age
// obj.walking()
// obj.runningFetcher()




//  Default parametere

// function sayHello(firstName = "Pramod"){
//     console.log("Hello bhai",firstName)
// }

// // sayHello("Pramod")
// sayHello('Sagar')



// function solve(val = {name:"Pramod",age:30,height:5}){
// console.log(val)
// }

// solve()

// function solve(val = {name:"Pramod",age:30,height:5.4}){
// console.log(val)
// }

// solve({name:"Sagar",age:35,height:6})

// function solve(val = ["pramod",1,true]){
// console.log(val)
// }

// solve()
// function solve(val = ["pramod",1,true]){
// console.log(val)
// }

// solve(null)            it will assign val = null


// function solve(val = ["pramod",1,true]){
// console.log(val)
// }

// solve(undefined)         it will not assign val = undefined as value of val will be default value

// function getAge(age =200 ){
//     console.log(getAge)
// }
// function utility (name= "love", age= getAge()){
// console.log(name , age)
// }

// utility("Pramod",20)