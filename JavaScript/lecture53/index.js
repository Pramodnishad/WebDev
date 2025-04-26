// function changeText(){
//     let item = document.getElementById('fpara')
//     item.textContent = 'Hello Pramod Come On'
// }

// let item = document.getElementById('fpara')
// item.addEventListener('click',changeText)
// item.removeEventListener('click',changeText)


// let anchorElement = document.getElementById('fanchor')

// anchorElement.addEventListener('click', function (event) {
//     event.preventDefault()
//     anchorElement.textContent = "Nhi jayega isase age kya karega"
// })

// let paras = document.getElementsByTagName('p')

// for(let i=0; i<paras.length; i++){
//     let para = paras[i]
//     para.addEventListener('click',function(e){
//         alert(`clicked on ${i+1}`)
//     })
// }


// let paras = document.getElementsByTagName('p')

// function clickAlert(event){
//     alert('Clicked on ' + event.target.textContent)
// }

// for(i=0; i<paras.length; i++){
//     let para = paras[i]
//     para.addEventListener('click',clickAlert)
// }



let para = document.getElementById('wrapper')

function click(event){
   if(event.target.nodeName === "SPAN"){
    alert("clicked on " +event.target.textContent)
   }
}

para.addEventListener('click',click)