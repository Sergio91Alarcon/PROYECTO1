document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario-articulo");
    const listaArticulos = document.querySelector(".articulos");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const titulo = document.getElementById("titulo").value;
        const contenido = document.getElementById("contenido").value;

        if (titulo && contenido) {
            // Crear un nuevo elemento de artículo
            const nuevoArticulo = document.createElement("div");
            nuevoArticulo.classList.add("articulo");
            nuevoArticulo.innerHTML = `<h2>${titulo}</h2><p>${contenido}</p>`;

            // Agregar el nuevo artículo a la lista
            listaArticulos.appendChild(nuevoArticulo);

            // Limpiar el formulario
            document.getElementById("titulo").value = "";
            document.getElementById("contenido").value = "";
        }
    });
});

// Contar artículos y mostrar el contador en todas las secciones de artículos
function actualizarContadorArticulos() {
    const contadorArticulos = document.querySelectorAll('.articulo').length;
    const contadores = document.querySelectorAll('.contador-articulos');

    contadores.forEach(contador => {
        contador.textContent = contadorArticulos;
    });
}

// Llamar a la función para actualizar el contador inicialmente
actualizarContadorArticulos();
