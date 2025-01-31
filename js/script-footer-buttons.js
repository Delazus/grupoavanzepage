document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los botones del footer
    const footerButtons = document.querySelectorAll('.footer-buttons .circle-button');
    const subtitlesButton = document.getElementById('btn-subtitles'); // Botón de subtítulos

    // Activar el botón de subtítulos al iniciar la app
    subtitlesButton.classList.add('active');

    // Manejar el estado activo de los botones
    footerButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Si el botón ya está activo, verificar si hay cuadros abiertos
            if (button.classList.contains('active')) {
                if (!isAnyDialogOpen()) {
                    button.classList.remove('active'); // Desactivar el botón si no hay cuadros abiertos
                }
            } else {
                // Remover la clase activa de todos los botones
                footerButtons.forEach(btn => btn.classList.remove('active'));
                // Agregar la clase activa al botón clicado
                button.classList.add('active');
            }
        });
    });

    // Manejar la desactivación de botones cuando se cierran los cuadros de confirmación
    document.getElementById('confirm-web').querySelector('.cancel-button').addEventListener('click', () => {
        hideConfirmation('confirm-web');
        deactivateButton('btn-web');
    });

    document.getElementById('confirm-web').querySelector('.confirm-button').addEventListener('click', () => {
        redirectToWeb();
        deactivateButton('btn-web');
    });

    document.getElementById('confirm-linkedin').querySelector('.cancel-button').addEventListener('click', () => {
        hideConfirmation('confirm-linkedin');
        deactivateButton('btn-linkedin');
    });

    document.getElementById('confirm-linkedin').querySelector('.confirm-button').addEventListener('click', () => {
        redirectToLinkedIn();
        deactivateButton('btn-linkedin');
    });
});

/**
 * Verificar si algún cuadro de diálogo está abierto.
 * @returns {boolean} - `true` si hay un cuadro abierto, `false` si no.
 */
function isAnyDialogOpen() {
    const dialogs = ['subtitles-box', 'robot-dialog-box', 'confirm-web', 'confirm-linkedin'];
    return dialogs.some(id => {
        const element = document.getElementById(id);
        return element && element.style.display === 'block';
    });
}

/**
 * Desactivar un botón específico del footer.
 * @param {string} buttonId - ID del botón a desactivar.
 */
function deactivateButton(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) button.classList.remove('active');
}

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

    // Mostrar los subtítulos
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

/**
 * Mostrar confirmación para Web o LinkedIn.
 * @param {string} id - ID del cuadro de confirmación (Web o LinkedIn).
 */
function showConfirmation(id) {
    showBox(id);
}

/**
 * Ocultar un cuadro de confirmación específico.
 * @param {string} id - ID del cuadro de confirmación que se quiere ocultar.
 */
function hideConfirmation(id) {
    const box = document.getElementById(id);
    if (box) {
        box.style.display = 'none';
    }
    if (activeBox === id) {
        activeBox = null;
    }
}

/**
 * Redirigir al usuario a la página web de Grupo Avanze.
 */
function redirectToWeb() {
    window.open('https://grupoavanze.cl', '_blank');
    hideConfirmation('confirm-web');
}

/**
 * Redirigir al usuario a la página de LinkedIn de Grupo Avanze.
 */
function redirectToLinkedIn() {
    window.open('https://linkedin.com/company/grupo-avanze-cl', '_blank');
    hideConfirmation('confirm-linkedin');
}
