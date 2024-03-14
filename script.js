let apl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let imageBox =document.getElementById("imageBox");
let qrimage = document.getElementById("qrimage");
let inputBox = document.getElementById("inputBox");


function getQrCode(){
    if(inputBox.value.length > 0){
        qrimage.src = apl + inputBox.value;
        imageBox.classList.add("show")
        inputBox.textContent = "";
    }
    else{
        inputBox.classList.add("error");
        
        setTimeout(()=>{
            inputBox.classList.remove("error");
        },1000)
    }
}