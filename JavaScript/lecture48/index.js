// console.log(Math.PI)
// console.log(Math.max(20,200,500,73654))
// console.log(Math.min(20,200,500,73654))

// console.log(Math.floor(5.9))
// console.log(Math.ceil(5.9))
// console.log(Math.abs(-5))
// console.log(Math.random())
// console.log(Math.sqrt(5))
// console.log(Math.pow(2,5))


// Date 


// let currDate = new Date()

// console.log(currDate)

// let date = new Date('March 1 1995  7:00 ') 
// let date = new Date('June 20 1998 07:15') 

// let newDate = new Date (1998,5 ,20,7)
// let day = newDate.getDay()
// let month = newDate.getMonth()
// let year = newDate.getFullYear()

// console.log(`${day}/${month}/${year}`)


// let date = new Date()
// let formatedDate = date.toLocaleString('en-US',{
//     weekday:"long",
//     month:"long",
//     year:"numeric"
// }).replace(/, /g, '/')

// console.log(formatedDate)
// let date = new Date()
// let weeekDay = date.getDate()
// let month = date.toLocaleDateString('en-US',{
//     month:"short"
// })

// let year = date.getFullYear()

// console.log(`${weeekDay}/${month}/${year}`)




// let date = new Date()

// let day = date.getUTCDate()
// let month = date.toLocaleDateString('en-us',{month:"short"})
// let year = date.getFullYear()
// let hour = date.getHours()
// let minutes = date.getMinutes()
// let seconds = date.getSeconds()
 
// console.log(`${day} ${month} ${year} and time is ${hour}:${minutes}:${seconds}`)

// let date = new Date()
// let formatedDate = date.toLocaleDateString('en-US',{
//     day:"2-digit",
//     month:"short",
//     year:"numeric",
//     hour:"2-digit",
//     minute:"2-digit",
//     second:"2-digit",
//     hour12:true
// })

// console.log(formatedDate)