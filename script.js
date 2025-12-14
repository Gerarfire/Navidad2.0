function crearAnimacion() {
    const copo = document.createElement('div');
    copo.className = 'snowflake';

    // Símbolos variados
    const simbolos = ['❄', '❅', '✼'];
    copo.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];

    // Posición horizontal
    copo.style.left = Math.random() * window.innerWidth + 'px';

    // Tamaño y opacidad
    copo.style.fontSize = (Math.random() * 15 + 10) + 'px';
    copo.style.opacity = Math.random();

    // Velocidad distinta
    const duracion = Math.random() * 4 + 6;
    copo.style.animationDuration = duracion + 's';

    document.body.appendChild(copo);

    setTimeout(() => {
        copo.remove();
    }, duracion * 1000);
}

// La nieve cae siempre automáticamente
document.addEventListener('DOMContentLoaded', () => {
    setInterval(crearAnimacion, 200);
});
