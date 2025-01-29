document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar el contenedor del AR
    const arContainer = document.getElementById('ar-container');

    // Crear el iframe dinámicamente
    const iframe = document.createElement('iframe');
    iframe.src = "https://avanze.cl/apps/aravanze/"; // URL de la app AR
    iframe.title = "AR Application"; // Título del iframe
    iframe.frameBorder = "0"; // Elimina bordes del iframe
    iframe.allow = "camera; fullscreen"; // Permitir acceso a cámara y pantalla completa
    iframe.style.width = "100%"; // Ancho completo del contenedor
    iframe.style.height = "100%"; // Altura completa del contenedor
    iframe.style.border = "none"; // Elimina bordes visuales

    // Agregar el iframe al contenedor
    arContainer.appendChild(iframe);
});