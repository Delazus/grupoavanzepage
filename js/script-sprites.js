document.addEventListener('DOMContentLoaded', () => {
    const robotSprites = document.querySelectorAll('.robot-sprite'); // Selecciona todos los sprites

    let frameIndex = 0; // Cuadro inicial
    const totalFrames = 16; // Número total de frames
    const frameSize = 512; // Tamaño de cada sprite
    const frameDuration = 100; // Duración de cada frame en milisegundos

    function animateSprite() {
        robotSprites.forEach(robotSprite => {
            let col = frameIndex % 4; // Columnas (4 columnas)
            let row = Math.floor(frameIndex / 4); // Filas (4 filas)
            
            let posX = col * frameSize * -1;
            let posY = row * frameSize * -1;

            // Aplicar nueva posición al sprite actual
            robotSprite.style.backgroundPosition = `${posX}px ${posY}px`;
        });

        // Pasar al siguiente frame
        frameIndex = (frameIndex + 1) % totalFrames;
    }

    // Iniciar la animación con intervalos para todas las instancias
    setInterval(animateSprite, frameDuration);
});