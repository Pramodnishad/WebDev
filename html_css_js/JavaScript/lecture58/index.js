// let name = "Pramod"

// function outerName(){
//     let name = "Kumar"
//     // {
//     //     let name = "block"
//     // }
//     function innerName(){
//         let name = "Nishad"
//         console.log(name)
//     }
//     innerName()
// }

// outerName()


// let name = "Pramod"
 function outerFunction(){
    let name = "Kumar"
    function innerFunction(){
        console.log(name)
    }
    return innerFunction
 }


 let inner = outerFunction()

 inner()
