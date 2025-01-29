// Variables globales
let activeBox = null; // Para rastrear qué cuadro está activo
let currentIntroStep = 1; // Paso actual de la introducción inicial
let currentSubtitleIndex = 0; // Índice del subtítulo actual
let typingInterval = null; // Referencia al intervalo de tipeo

const subtitles = [ // Textos dinámicos para los subtítulos
    "Hola, soy Geeky, tu asistente virtual. Bienvenido a Grupo Avanze, donde la innovación y la tecnología se combinan para ofrecerte soluciones a medida. ¡Vamos a explorar juntos!",
    "Nos dedicamos a darle solución a las necesidades de nuestros clientes, implementando proyectos innovadores a medida. Desde desarrollo de sistemas, instalación de equipamiento tecnológico, integración de administración de central de video vigilancia, marketing y diseño, outsourcing TI, telemetría, video analítica y hasta asesoría tecnológica, ayudamos a que tu negocio crezca.",
    "En Grupo Avanze somos más de 60 profesionales, especialistas en la implementación de tecnologías de información, comprometidos con nuestros clientes. Los asesoramos en cada etapa de desarrollo, nos involucramos en sus procesos y necesidades de mejora, y les ofrecemos SOLUCIONES hechas a la medida.",
    "¿Listo para trabajar con nosotros? Contáctanos a través de nuestra página web o redes sociales. Estamos aquí para ayudarte a lograr tus objetivos."
];

const subtitlesTitles = [ // Títulos dinámicos para subtítulos
    "Introducción", // Solo usado al inicio
    "Qué hacemos",
    "Nosotros",
    "Contacto"
];

/**
 * Inicializar los cuadros y configuración general al cargar la app.
 */
function initializeApp() {
    document.getElementById('subtitles-box').style.display = 'none'; // Ocultar subtítulos al inicio
    document.getElementById('robot-dialog-box').style.display = 'none'; // Ocultar cuadro de diálogo al inicio
    activeBox = null; // Ningún cuadro activo inicialmente
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

    if (id === 'subtitles-box') startTypingEffect(); // Iniciar animación de texto si es el cuadro de subtítulos
}

/**
 * Activar animación de subtítulos: escribe el texto letra por letra.
 */
function startTypingEffect() {
    const titleElement = document.querySelector('.subtitles-box-title');
    const bodyElement = document.querySelector('.subtitles-box-body');

    if (!bodyElement || currentSubtitleIndex >= subtitles.length) return;

    const title = subtitlesTitles[currentSubtitleIndex];
    const text = subtitles[currentSubtitleIndex];

    titleElement.textContent = title; // Establecer el título del subtítulo
    bodyElement.innerHTML = ''; // Limpiar el contenido actual
    let index = 0;

    if (typingInterval) clearInterval(typingInterval); // Limpiar cualquier intervalo previo

    // Tipear el texto letra por letra
    typingInterval = setInterval(() => {
        bodyElement.innerHTML += text.charAt(index);
        index++;
        if (index === text.length) {
            clearInterval(typingInterval); // Detener animación al finalizar el texto
        }
    }, 50); // Velocidad del tipeo (50ms por letra)
}

/**
 * Mostrar subtítulos al dar clic en "Comenzar".
 */
function startSubtitlesOnBegin() {
    currentSubtitleIndex = 0; // Establecer al primer subtítulo (introducción)
    document.getElementById('subtitles-box').style.display = 'block'; // Mostrar subtítulos
    activeBox = 'subtitles-box'; // Definir como cuadro activo
    startTypingEffect(); // Iniciar animación de texto
}

/**
 * Iniciar un diálogo del robot y mostrar el subtítulo correspondiente.
 * @param {number} index - Índice del texto en el arreglo de subtítulos.
 */
function startRobotDialogue(index) {
    document.getElementById('robot-dialog-box').style.display = 'none'; // Cerrar cuadro de diálogo
    currentSubtitleIndex = index; // Configurar subtítulo seleccionado
    startTypingEffect(); // Mostrar texto animado
    showBox('subtitles-box'); // Mostrar cuadro de subtítulos
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
        activeBox = null; // Restablecer el cuadro activo si coincide
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
    document.getElementById(`intro-step-${currentIntroStep}`).classList.add('hidden'); // Oculta el paso actual
    currentIntroStep++; // Avanza al siguiente paso
    document.getElementById(`intro-step-${currentIntroStep}`).classList.remove('hidden'); // Muestra el siguiente paso
}

/**
 * Cerrar la introducción inicial y mostrar la app.
 */
function closeIntro() {
    document.getElementById('intro-overlay').style.display = 'none'; // Ocultar introducción
    startSubtitlesOnBegin(); // Inicia subtítulos al cerrar introducción
}

// Inicializar la app
document.addEventListener('DOMContentLoaded', initializeApp);
