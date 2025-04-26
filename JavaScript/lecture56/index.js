// let firstPromise = new Promise((resolve , reject)=>{
//     setTimeout(function sayMyName(){
//         console.log("Hello Pramod Come On")
//     },500)
//     resolve(1)
// })
// let firstPromise = new Promise((resolve , reject)=>{
//     setTimeout(function sayMyName(){
//         console.log("Hello Pramod Come On")
//     },500)
//     resolve(1)
// })

// let promise1 = new Promise((resolve, reject) => {
//     // let success = true;
//     let success = false;
//     if (success) {
//         resolve("Prmomise Fullfilled ")
//     } else {
//         reject('Promise Rejected')
//     }
// });
// promise1.then((message) => {
//     console.log("Then ka message " + message)
// }).catch((error) => {
//     console.log('error hai', error)
// })


// Chaining Promises 

// promise1.then((message)=>{
//     console.log("First message1 "+message)
//     return "Promise fullfilled second message"
// }).then((message)=>{
//     console.log("Second message2 "+message)
//     return("Promise fullfilled third message")
// }).then((message)=>{
//     console.log("Third message3 "+message)
// }).catch((error)=>{
//     console.error(error)
// }).finally((message)=>{
// console.log("Mai to final hu bhai")
// })


//  Promise.all

let promise1 = new Promise((resolve, reject)=>{
setTimeout(resolve,1000,"First Promise")
});
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Second Promise')
});
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(reject,3000,"Third Promise")
})

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values)
}).catch((error)=>{
    console.error(error)
})
