//array donde se cargarán los datos recibidos:
let categoriesArray = [];

//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function showCategoriesList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let category = array[i];
        console.log("inicio de html",category );
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.imgSrc + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ category.name +`</h4> 
                        <p> `+ category.description +`</p> 
                        </div>
                        <small class="text-muted">` + category.productCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        // se modifico el "SRC" de la imagen linea 15
        // se agrego una "t" al description linea 21
        // se cambio productCount por "name" linea 20
        // se modifico name por "productCount" linea 23
        // se modifico el ID estaba mal escrito linea 35
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(LIST_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            // Nombre mal escrito se agrego una "a" linea 45
            showCategoriesList(categoriesArray);
        }
    });
});