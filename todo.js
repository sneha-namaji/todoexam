let enter= document.querySelector('input[placeholder="enter"]')
let btn= document.querySelector('.add')
let check=document.querySelector('checkbox')
let div=document.querySelector('.div1')

let entername
let listVal = []

window.onload = function () {
    // let dataLs = JSON.parse(localStorage.getItem('data'))
    let items = listVal.map((el) => {

        let elems = `<h1> ${el.entername} </h1>`
        return elems
    })
    // div.innerHTML = items.join('')
}


enter.addEventListener("keyup", function (e) {
    entername = e.target.value
})

btn.addEventListener("click", function (e) {
        let objInpus = { "inputval":entername }
        listVal.push(objInpus)
        displayItems()
})
console.log(listVal);

function displayItems() {
    let items = listVal.map((el, i) => {
        let elems = `<input type="checkbox" class="checkbox"><h1 class="h1tag"> ${el.inputval} </h1>
                    <button class="delet" onclick="del(${i})"> Delete </button>`
        return elems
    })
    div.innerHTML = items.join('')
}

function del(i) {
    listVal.splice(i, 1)
    displayItems()
}
