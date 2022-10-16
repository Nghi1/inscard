let selectFile=document.getElementById("selectFile")
let innerFile=document.getElementById("innerFile")
const insCard="width: 100px; height: 200px;box-shadow: 0 0 10px 20px rgba(0, 0, 0, 0.2);";
selectFile.addEventListener('change', function(){
    if(selectFile.files){
        let reader= new FileReader()
        reader.onload = function () {
            innerFile.style.backgroundImage=`url(${reader.result})`
            innerFile.innerHTML=`<img style="${insCard}" src="${reader.result}"/>`
        }
        reader.readAsDataURL(selectFile.files[0]);
    }else{
        console.log("none")
    }
})
