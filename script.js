document.getElementById('toggle-mode').addEventListener('change', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});

// Inicializar la librería AOS para activar las animaciones
AOS.init({
    duration: 1000, // Duración de la animación en milisegundos
    once: true // La animación solo se activa una vez
});
