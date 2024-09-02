document.addEventListener("DOMContentLoaded", function () {
  // Escribe el código necesario aquí
  const botoncito = document.getElementById("highlightBtn");
  const parrafito = document.getElementById("lorem")
  
  botoncito.addEventListener("click",()=>{
parrafito.classList.contains("highlight")?parrafito.classList.remove("highlight"):parrafito.classList.add("highlight")
  })
  //
});
