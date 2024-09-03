DATA_URL = "https://dragonball-api.com/api/characters"


document.addEventListener("DOMContentLoaded",()=>{

fetch(DATA_URL)
.then((res)=>res.json())
.then((data)=>{
createPJ(data?.items)
});


function createPJ(dataArray) {
    container.innerHTML = "";
    dataArray.map((item)=>{
        container.innerHTML += `<div onclick="redirect(${item.id})" class="product-container">
    <img class="product-img img-thumbnail" src="${item.image}">
    <h1>${item.name}</h1>
    <h1>${item.ki}</h1>
    <h1>${item.description}</h1>
    <h1>${item.gender}</h1>
    <h1>${item.race}</h1>
</div>`;})
  }
});