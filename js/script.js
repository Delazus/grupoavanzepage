// Variables globales
let activeBox = null; // Para rastrear qué cuadro está activo
let currentIntroStep = 1; // Paso actual de la introducción inicial
let currentSubtitleIndex = 0; // Índice del subtítulo actual
let typingInterval = null; // Referencia al intervalo de tipeo
let isTyping = false; // Indica si la animación está en curso

const subtitles = [ // Textos dinámicos para los subtítulos
    "Hola, soy Geeky, tu asistente virtual. Bienvenido a Grupo Avanze, donde la innovación y la tecnología se combinan para ofrecerte soluciones a medida. ¡Vamos a explorar juntos!",
    "Nos dedicamos a darle solución a las necesidades de nuestros clientes, implementando proyectos innovadores a medida. Desde desarrollo de sistemas, instalación de equipamiento tecnológico, integración de administración de central de video vigilancia, marketing y diseño, outsourcing TI, telemetría, video analítica y hasta asesoría tecnológica, ayudamos a que tu negocio crezca.",
    "En Grupo Avanze somos más de 60 profesionales, especialistas en la implementación de tecnologías de información, comprometidos con nuestros clientes. Los asesoramos en cada etapa de desarrollo, nos involucramos en sus procesos y necesidades de mejora, y les ofrecemos SOLUCIONES hechas a la medida.",
    "¿Listo para trabajar con nosotros? Contáctanos a través de nuestra página web o redes sociales. Estamos aquí para ayudarte a lograr tus objetivos."
];

const subtitlesTitles = [ // Títulos dinámicos para subtítulos
    "Introducción", 
    "Qué hacemos",
    "Nosotros",
    "Contacto"
];

/**
 * Inicializar la aplicación.
 */
function initializeApp() {
    document.getElementById('subtitles-box').style.display = 'none';
    document.getElementById('robot-dialog-box').style.display = 'none';
    activeBox = null;

    // Agregar evento para completar el texto al hacer clic en los subtítulos
    document.getElementById('subtitles-box').addEventListener('click', completeTypingEffect);
}

/**
 * Mostrar u ocultar un cuadro flotante.
 * Si hay otro cuadro activo, lo cierra automáticamente antes de abrir el nuevo.
 * @param {string} id - ID del cuadro que se quiere mostrar u ocultar.
 */
function showBox(id) {
    if (activeBox && activeBox !== id) {
        const currentBox = document.getElementById(activeBox);
        if (currentBox) {
            currentBox.style.display = 'none';
        }
    }

    const box = document.getElementById(id);
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
    activeBox = box.style.display === 'block' ? id : null;

    if (id === 'subtitles-box') startTypingEffect();
}

/**
 * Activar animación de subtítulos letra por letra.
 */
function startTypingEffect() {
    const titleElement = document.querySelector('.subtitles-box-title');
    const bodyElement = document.querySelector('.subtitles-box-body');

    if (!bodyElement || currentSubtitleIndex >= subtitles.length) return;

    const title = subtitlesTitles[currentSubtitleIndex];
    const text = subtitles[currentSubtitleIndex];

    titleElement.textContent = title;
    bodyElement.innerHTML = ''; 
    let index = 0;
    isTyping = true; // Indicar que la animación está en curso

    if (typingInterval) clearInterval(typingInterval);

    typingInterval = setInterval(() => {
        bodyElement.innerHTML += text.charAt(index);
        index++;
        if (index === text.length) {
            clearInterval(typingInterval);
            isTyping = false;
        }
    }, 50);
}

/**
 * Completa el texto inmediatamente al hacer "tap" en el cuadro de subtítulos.
 */
function completeTypingEffect() {
    if (isTyping) {
        clearInterval(typingInterval);
        document.querySelector('.subtitles-box-body').innerHTML = subtitles[currentSubtitleIndex];
        isTyping = false;
    }
}

/**
 * Mostrar subtítulos al dar clic en "Comenzar".
 */
function startSubtitlesOnBegin() {
    currentSubtitleIndex = 0;
    document.getElementById('subtitles-box').style.display = 'block';
    activeBox = 'subtitles-box';
    startTypingEffect();
}

/**
 * Iniciar un diálogo del robot y mostrar el subtítulo correspondiente.
 * @param {number} index - Índice del subtítulo a mostrar.
 */
function startRobotDialogue(index) {
    document.getElementById('robot-dialog-box').style.display = 'none';
    currentSubtitleIndex = index;
    startTypingEffect();
    showBox('subtitles-box');
}

/**
 * Alternar el cuadro de subtítulos.
 */
function toggleSubtitles() {
    showBox('subtitles-box');
}

/**
 * Mostrar el cuadro de diálogo del robot.
 */
function talkToRobot() {
    showBox('robot-dialog-box');
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

/**
 * Avanzar al siguiente paso de la introducción inicial.
 */
function nextIntroStep() {
    document.getElementById(`intro-step-${currentIntroStep}`).classList.add('hidden');
    currentIntroStep++;
    document.getElementById(`intro-step-${currentIntroStep}`).classList.remove('hidden');
}

/**
 * Cerrar la introducción inicial y mostrar la app.
 */
function closeIntro() {
    document.getElementById('intro-overlay').style.display = 'none';
    startSubtitlesOnBegin();
}

// Inicializar la app
document.addEventListener('DOMContentLoaded', initializeApp);