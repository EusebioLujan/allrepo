document.addEventListener('DOMContentLoaded', function () {
    const allLinks = document.querySelectorAll('a');
    const infoParrafo = document.getElementById('info');
    
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :
    const totalEnlaces = allLinks?.length;
    let infoParrafos = `Número total de enlaces en la página: <strong>${totalEnlaces}</strong>`;

    // Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :
    if (totalEnlaces >= 2) {
        const penultimoLink = allLinks[totalEnlaces - 2]?.href;
        infoParrafos += `<br>La dirección del penúltimo enlace es: <strong>${penultimoLink}</strong>`;
    }

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :
    const linksPrueba = Array.from(allLinks).filter(link => link?.href === 'http://prueba/')?.length;
    infoParrafos += `<br>Número de enlaces que apuntan a "http://prueba/": <strong>${linksPrueba}</strong>`;

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :
    const tercerParrafo = document.querySelectorAll('p')[2];
    const linksTercerParrafo = tercerParrafo ? tercerParrafo?.querySelectorAll('a')?.length : 0;
    infoParrafos += `<br>Número de enlaces en el tercer párrafo: <strong>${linksTercerParrafo}</strong>`;

    // Actualiza la informacion del parrafo que tiene el ID "info"
    infoParrafo.innerHTML = infoParrafos;
});
