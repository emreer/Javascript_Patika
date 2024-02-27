let myNameDOM = document.querySelector("#myName")
let myName = prompt("Lütfen Adınızı Giriniz.")

myNameDOM.innerHTML = `${myName}`


function printDate(){
    let date = new Date()
    let day = date.toLocaleString('tr-TR',{weekday:'long'})
    let time = date.toLocaleString('tr-TR')

    let clock = document.querySelector("#clock")

    clock.innerHTML = time + ' ' + day
}

setInterval(printDate,1000)
   
