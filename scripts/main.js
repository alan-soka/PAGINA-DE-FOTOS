document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor');
    const links = document.querySelectorAll('nav ul li a[data-category]');

    // Cargar datos desde el archivo JSON
    fetch('fotos.json')
        .then(response => response.json())
        .then(data => {
            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const category = link.getAttribute('data-category');
                    displayImages(category, data);
                });
            });
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
        });

    function displayImages(category, imagesData) {
        contenedor.innerHTML = '';
        if (imagesData.imagenes[category]) {
            imagesData.imagenes[category].forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.url;
                imgElement.alt = image.id;
                contenedor.appendChild(imgElement);
            });
        } else {
            contenedor.innerHTML = '<p>no existe xd</p>';
        }
    }
});
