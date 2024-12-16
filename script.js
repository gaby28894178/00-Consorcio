document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    let data = [];

    // Cargar datos desde el archivo JSON en la carpeta js
    fetch('./js/data.json')
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
            updateContent(currentIndex);
        })
        .catch(error => console.error('Error al cargar JSON:', error));

    // Función para actualizar contenido
    function updateContent(index) {
        if (data.length === 0) return;

        const imageElement = document.getElementById('dynamic-image');
        const titleElement = document.getElementById('dynamic-title');
        const paragraphElement = document.getElementById('dynamic-paragraph');

        imageElement.src = data[index].image;
        titleElement.textContent = data[index].title;
        paragraphElement.textContent = data[index].paragraph;
    }

    // Función para cambiar al siguiente elemento
    function nextSlide() {
        currentIndex = (currentIndex + 1) % data.length;
        updateContent(currentIndex);
    }

    // Función para cambiar al elemento anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + data.length) % data.length;
        updateContent(currentIndex);
    }

    // Evento para cambiar al siguiente elemento
    document.getElementById('next-button').addEventListener('click', nextSlide);

    // Evento para cambiar al elemento anterior
    document.getElementById('prev-button').addEventListener('click', prevSlide);

    // Lógica para el menú hamburguesa
    document.getElementById('menu-button').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    });
});
