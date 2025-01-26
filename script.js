// script.js

function talkToRobot() {
    alert("Conectándote con el robot...");
    // Aquí puedes integrar la lógica para iniciar la conversación con el robot
}

let subtitlesVisible = false; // Estado inicial

function toggleSubtitles() {
    const subtitlesBox = document.getElementById("subtitles-box");
    subtitlesVisible = !subtitlesVisible;

    if (subtitlesVisible) {
        subtitlesBox.style.display = "block"; // Muestra el cuadro
    } else {
        subtitlesBox.style.display = "none"; // Oculta el cuadro
    }
}