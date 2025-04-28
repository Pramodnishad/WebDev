// code 1

const t1 = performance.now()
for (i = 0; i <= 100; i++) {
    let para = document.createElement('p')
    para.textContent = "This is para number " + i;
    document.body.appendChild(para)
}
const t2 = performance.now()

console.log("total time" + (t2 - t1))


// code 2

const t3 = performance.now()

let myDiv = document.createElement('div')
for (i = 0; i <= 100; i++) {
    let para = document.createElement('p')
    para.textContent = "This is second code para" + i
    myDiv.appendChild(para)
}

document.body.appendChild(myDiv)

const t4 = performance.now()

console.log("total time for second code " + (t4 - t3))

//  best code practice
const t5 = performance.now()

let fragement = document.createDocumentFragment()

for (i = 0; i <= 100; i++) {
    let para = document.createElement('p')
    para.textContent = "Hello from best para " + i
    fragement.appendChild(para)
}

document.body.appendChild(fragement)

const t6 = performance.now()

console.log("best code time ", (t6 - t5))