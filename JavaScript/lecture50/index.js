// try{
//     console.log('try block starts here')
//     console.log(x)
//     console.log('try block ends here')
// } catch(err){
//     console.log("I am inside catch block")
//     console.log("Error",err)
// }
// finally{
//     console.log("I will run all the time , as I am finaly block")
// }

// create a custom error 

try{
console.log("run")
console.log(x)
} catch(err){
    let statusCode =100
if(statusCode ==100){
    throw  new Error('bhai pahelo declare to kr')
}}
finally{
    console.log('chal na bhai')
}