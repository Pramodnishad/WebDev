// Obects in javascript



// let obj = {
//     name: "Pramod",
//     add: "Lohra",
//     'family + background' :" Good",
//     greet:function (){
//         console.log("Hello Bhai kaise ho")
//     }
// }

// console.log(obj)
// console.log( obj.greet)
// obj.greet()

// let obj = {
//     name:"Pramod",
//     address:{
//         VPO:"Lohra",
//         Dist:"Azamgarh"
//     }
// }

// let obj1 = {...obj}

// obj1.name = "Kumar"
// console.log("pahela obj",obj.name)
// console.log(obj1.name)

// obj1.address.VPO = "Atraulia"
// console.log("Object pahela wala ",obj.address.VPO)
// console.log(obj1.address.VPO)

// let obj1 = JSON.parse(JSON.stringify(obj))

// obj1.address.VPO = "Atraulia"

// console.log("Pahela obj",obj.address.VPO)
// console.log("Pahela obj",obj1.address.VPO)




// creation of Array in javascript


// let arr = [1,2,3,4,5,10]

// let arr1 = new Array('pramod',2,3, false)
// console.log(arr1[0])
// console.log(typeof (arr1[3]))
// arr1.push("Nishad")
// arr1.pop()
// arr1.shift()
// arr1.unshift("Pramod K")
// console.log(arr1)

// arr1.push(20)
// arr1.push(30)
// arr1.push(40)
// const newArr = arr1
// newArr[2] = "Hello Bhai Sun na" 
// console.log(arr1)
// console.log(newArr)

// arr1.slice(2)

// arr1.splice(70,40,30)
// arr1.splice(2,0,"Do ko hta kr kuch aur likh de yaar")

// arr1.splice(2,0,100,200,300)

// console.log(arr1)



// map

// let arr = [10,20,30]

// let ansarr = arr.map((num)=>{
//     return num*num
// })

// let ansarr = arr.map((num)=>{
//     console.log(num)
// })

// console.log(ansarr)


// let arr = [10,15,17,20,23,25,31,43,40]

// let ansArr = arr.filter((num)=>{
//     if(num%2 === 0){
//         return true
//     } else false
// })
// let ansArr = arr.filter((num)=>{
//   return num%2 === 0
// })


// Filter 

// let arr = [1,2,3,4,'Pramod',true,null ]

// const ansArr = arr.filter((val)=>{
// return typeof(val) === 'string'
// })
// console.log(ansArr)


// Reduce

// let arr = [10,20,30,40]

// let ans = arr.reduce((acc, currVal)=>{
//     return acc +currVal
// },0)

// let ans = arr.reduce((acc, currVal)=>{
//     return acc +currVal
// },10)

// console.log(ans)

// const cart = [
//     { item: "Shoes", price: 2500 },
//     { item: "T-Shirt", price: 1200 },
//     { item: "Jeans", price: 2000 },
//     { item: "Cap", price: 500 }
//   ];

//   const carValue = cart.reduce((acc, currVal)=>{
//     return acc + currVal.price
//   },0)

//   console.log(carValue)


//  Indexof

// let arr = [1,2,3,4,5,6,7,8,9,10,2,2]
// console.log(arr.indexOf(10))


// Find


// console.log(arr.find((item)=> item == 2)) retuns only first value


//  If we want to find particular total value then use this 


// const newarr = arr.filter((item)=>{
//     return item == 2
// })

// console.log(newarr)



//  forEach loop

// let arr = [10,20,30]

// arr.forEach((val,index)=>{
//     console.log('Sr. No.',index+1,'Number:',val)
// })
// let length = arr.length
// for(let index=0; index<length; index++){
//     console.log(arr[index])
// }



// forIn loop



// let obj = {
//     name:"Pramod",
//     age:28,
//     weight:65,
//     Height:5.4
// }

// for(let key in obj){
//     console.log(key)
// }
// for(let key in obj){
//     console.log(obj[key])
// }
// for(let key in obj){
//     console.log(key,obj[key])
// }



//  forOf loop


// let arr = [10,20,30]

// for(let value of value){
//     console.log(arr)
// }

// let name = "Pramod"

// for(let value of name){
//     console.log(value)
// }
// for(let value of name){
//     console.log(name)
// }


let arr = [10,20,30,40,50]

function getSum(){
    let length = arr.length
let sum = 0
    for(let index = 0; index<length; index++){
        sum = sum+ arr[index]
    }
    return sum
}
total = getSum(arr)

console.log(total)