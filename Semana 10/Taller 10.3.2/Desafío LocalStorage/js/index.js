document.getElementById("buttonText").addEventListener("click",()=>{
    const valor = document.getElementById("inputText").value;
    localStorage.setItem("valor",valor)
})