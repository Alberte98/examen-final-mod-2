// Obtén una referencia al botón de regreso
const botonRegreso = document.getElementById('boton-regreso');

// Agrega un evento de clic al botón de regreso
botonRegreso.addEventListener('click', () => {
    // Desplaza la página hacia arriba suavemente
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

