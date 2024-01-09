const image = document.querySelector("#image");
const imgcontainer = document.querySelector(".imgcontainer");
const qrtext = document.querySelector("#inputtext");

function generator() {
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrtext.value}`;
    imgcontainer.classList.add("show-img")
}