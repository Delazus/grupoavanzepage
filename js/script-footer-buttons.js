document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los botones del footer
    const footerButtons = document.querySelectorAll('.footer-buttons .circle-button');
    const subtitlesButton = document.getElementById('btn-subtitles'); // Botón de subtítulos

    // Activar el botón de subtítulos al iniciar la app
    subtitlesButton.classList.add('active');

    // Manejar el estado activo de los botones
    footerButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover la clase activa de todos los botones
            footerButtons.forEach(btn => btn.classList.remove('active'));

            // Agregar la clase activa al botón clicado
            button.classList.add('active');
        });
    });
});

/**
 * Activar subtítulos y el botón correspondiente.
 */
function activateSubtitles() {
    const subtitlesButton = document.getElementById('btn-subtitles'); // Botón de subtítulos
    const footerButtons = document.querySelectorAll('.footer-buttons .circle-button');

    // Remover la clase activa de todos los botones
    footerButtons.forEach(btn => btn.classList.remove('active'));

    // Activar el botón de subtítulos
    subtitlesButton.classList.add('active');

    // Mostrar los subtítulos (esto depende de la lógica existente)
    showBox('subtitles-box');
}

/**
 * Iniciar un diálogo del robot y activar el subtítulo correspondiente.
 * @param {number} index - Índice del subtítulo a mostrar.
 */
function startRobotDialogue(index) {
    document.getElementById('robot-dialog-box').style.display = 'none'; // Cerrar cuadro de diálogo
    currentSubtitleIndex = index; // Configurar subtítulo seleccionado
    startTypingEffect(); // Mostrar texto animado

    // Activar los subtítulos y el botón correspondiente
    activateSubtitles();
}