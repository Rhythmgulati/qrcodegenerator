const image = document.querySelector("#image");
const imgcontainer = document.querySelector(".imgcontainer");
const qrtext = document.querySelector("#inputtext");

function generator() {
    if(qrtext.value.length>0){
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrtext.value}`;
    imgcontainer.classList.add("show-img")
    }else{   qrtext.classList.add("error");
        setTimeout(()=>{
            qrtext.classList.remove("error");
        },1000)
    }

}