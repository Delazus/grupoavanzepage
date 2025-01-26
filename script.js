// Variables globales
let activeBox = null; // Para rastrear qué cuadro está activo
let currentIntroStep = 1; // Paso actual de la introducción inicial

/**
 * Mostrar u ocultar un cuadro flotante.
 * Si hay otro cuadro activo, lo cierra automáticamente antes de abrir el nuevo.
 * @param {string} id - ID del cuadro que se quiere mostrar u ocultar.
 */
function showBox(id) {
    // Si hay un cuadro activo y no es el mismo, lo cerramos
    if (activeBox && activeBox !== id) {
        document.getElementById(activeBox).style.display = "none";
    }

    // Alternar visibilidad del cuadro actual
    const box = document.getElementById(id);
    if (box.style.display === "block") {
        box.style.display = "none";
        activeBox = null; // No hay cuadro activo
    } else {
        box.style.display = "block";
        activeBox = id; // Actualizar el cuadro activo
    }
}

/**
 * Alternar subtítulos.
 */
function toggleSubtitles() {
    showBox('subtitles-box');
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
    document.getElementById(id).style.display = "none";
    if (activeBox === id) {
        activeBox = null; // Restablecer el cuadro activo si coincide
    }
}

/**
 * Redirigir al usuario a la página web de Grupo Avanze.
 */
function redirectToWeb() {
    window.open('https://www.grupoavanze.com', '_blank');
    hideConfirmation('confirm-web');
}

/**
 * Redirigir al usuario a la página de LinkedIn de Grupo Avanze.
 */
function redirectToLinkedIn() {
    window.open('https://linkedin.com/company/grupo-avanze', '_blank');
    hideConfirmation('confirm-linkedin');
}

/**
 * Simular la interacción con el robot.
 * Muestra un mensaje en pantalla indicando que se está hablando con el robot.
 */
function talkToRobot() {
    alert("Conectándote con el robot...");
    // Aquí puedes integrar la lógica para iniciar la conversación con el robot
    // Ejemplo: Llamar a un API, abrir un chatbot, etc.
}

/**
 * Avanzar al siguiente paso de la introducción inicial.
 */
function nextIntroStep() {
    document.getElementById(`intro-step-${currentIntroStep}`).classList.add('hidden'); // Oculta el paso actual
    currentIntroStep++; // Avanza al siguiente paso
    document.getElementById(`intro-step-${currentIntroStep}`).classList.remove('hidden'); // Muestra el siguiente paso
}

/**
 * Cerrar la introducción inicial y mostrar la app.
 */
function closeIntro() {
    document.getElementById('intro-overlay').style.display = 'none';
}