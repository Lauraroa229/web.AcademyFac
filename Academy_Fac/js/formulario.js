// Obtener el formulario y el área de reseñas
const formulario = document.getElementById('submit-reseña');
const listaReseñas = document.getElementById('lista-reseñas');
// Escuchar el evento de envío del formulario
formulario.addEventListener('click', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario (no recargará la página)


    // Obtener el texto de la reseña
    const textoReseña = (document.getElementById('input-reseña')).value.trim();

    // Verificar que el campo no esté vacío
    if (textoReseña !== '') {
        // Crear un nuevo elemento para mostrar la reseña
        const nuevaReseña = document.createElement('div');
        nuevaReseña.classList.add('reseña');
        nuevaReseña.innerHTML = `<p>${textoReseña}</p>`;

        // Agregar la nueva reseña a la lista
        listaReseñas.appendChild;
    }
});
