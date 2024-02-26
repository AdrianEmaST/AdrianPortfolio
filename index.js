// Progreso de barras:

document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress-value");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateProgress() {
        progressBars.forEach(bar => {
            if (isInViewport(bar)) {
                const value = parseFloat(bar.getAttribute("data-value")) || 0;
                bar.style.width = value + "%";
            }
        });
    }

    animateProgress(); // Verificar inicialmente si la sección está en el área visible

    document.addEventListener("scroll", animateProgress); // Verificar en el evento de desplazamiento

});