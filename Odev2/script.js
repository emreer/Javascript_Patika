let inputDOM = document.querySelector("#task")
const listDOM = document.querySelector("#list")
let my_element_array = []

window.onload = function () {
    const depoElemanlar = JSON.parse(localStorage.getItem('ogeler'));
    console.log(depoElemanlar)
}


function elemanSilme(element) {
    element.remove()
    console.log(my_element_array)
}

function highlight(element) {
    // Toggle 'checked' class for the clicked list item
    element.classList.toggle('checked');

    // Close butonunu seç
    const close = element.querySelector(".close");

    // Close butonuna tıklanınca elemanı sil
    close.addEventListener("click", function (event) {
        event.stopPropagation();
        elemanSilme(element);
    });

}

function newElement() {

    let hata_kodu = 0

    console.log("-------------------------------------------")
    console.log(my_element_array)

    if (inputDOM.value != "" && (my_element_array.includes(inputDOM.value) == false)) {
        const liDOM = document.createElement("li")
        liDOM.innerHTML = inputDOM.value.trim()
        liDOM.onclick = function () {
            highlight(this);
        };
        listDOM.appendChild(liDOM)

        var sonLiElemani = document.querySelector('ul li:last-child')
        const spanDOM = document.createElement("span")
        spanDOM.className = "close"
        spanDOM.id = "close_option"
        spanDOM.innerHTML = "×"
        sonLiElemani.appendChild(spanDOM)


        inputDOM.value = ""
        listeyeEkle()
        basariliGiris()
    } else if (inputDOM.value != "") {
        hata_kodu = 1
        basarisizGiris(hata_kodu)
        inputDOM.value = ""
    } else if (my_element_array.includes(inputDOM.value) == false) {
        hata_kodu = 2
        basarisizGiris(hata_kodu)
        inputDOM.value = ""
    }



}

function basariliGiris() {
    $('#liveToast-success').toast('show')
}

function basarisizGiris(hata) {

    if (hata == 1) {
        $('#liveToast-error2').toast('show')
    }
    if (hata == 2) {
        $('#liveToast-error1').toast('show')
    }

}


function listeyeEkle() {
    let list_elements = listDOM.querySelectorAll("li")
    let list = []

    list_elements.forEach(element => {
        console.log(element.textContent)
        my_element_array.push(element.textContent)
    })

    localStorage.setItem("ogeler", JSON.stringify(my_element_array))
    my_element_array = []
}