// async function getData() {
//     setTimeout(function(){
//         console.log("I am inside the time block")
//     },3000)
// }

// getData()


// async function getData() {
//     // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
//     console.log(data)
// }

// getData()

// async function postData() {
//     const response = await fetch('https://dummyjson.com/posts/add',{
//         method:"POST",
//         headers:{'Content-Type':'application/json'},
//         body:JSON.stringify({
//             title:'I am in love with SomeOne',
//             userId:1
//         })
//     })
//     const data = await response.json()
//     console.log(data)
// }

// postData()


//  Using .then 


function postData(){
    fetch('https://dummyjson.com/posts/add',{
        method:"POST",
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify({
            title:"I am in love with Khusboo",
            userId:10
        })
    }).then(res=>res.json())
      .then(data=>console.log(data))
}

postData()

async function getData() {
    const response = await fetch('https://dummyjson.com/posts/user/5')
    const data = await response.json()
    console.log(data)
    
}
getData()



// using .then

// function getData(){
//     fetch('https://dummyjson.com/posts/user/5')
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//     .catch(error=>console.log(error))
// }

// getData()