document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('background_color').onclick = function() {
            
            let customText = prompt('Ingresa tu texto personalizado');
            
            
            if (customText) {
                // Concatenar la parte fija con la parte variable
                let fixedPart = document.getElementById('fixed-part').innerText;
                document.getElementById('variable-part').innerText = customText;
                
                // Mostrar una alerta con el mensaje 
                alert('Su cartel personalizado es: ' + fixedPart + ' ' + customText);
                
                // Cambiar la clase
                document.getElementById('variable-part').classList.add('highlight');
            } else {
                alert('No se ingresó ningún texto.');
            }
        };

const element =document.getElementById("texto_personalizado")
element.classList.toggle("estilo")

})


        
        

