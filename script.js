// script.js

function talkToRobot() {
    alert("Conectándote con el robot...");
    // Aquí puedes integrar la lógica para iniciar la conversación con el robot
}

function toggleSubtitles() {
    const subtitlesEnabled = document.body.classList.toggle("subtitles-enabled");
    alert(subtitlesEnabled ? "Subtítulos activados" : "Subtítulos desactivados");
}