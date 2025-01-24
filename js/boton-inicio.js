document.addEventListener("DOMContentLoaded", function() {
    // Mostrar u ocultar el botÃ³n de regreso al principio segÃºn el desplazamiento
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        const backToTopButton = document.getElementById("backToTop");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    // Llamar a scrollFunction inmediatamente para verificar la posiciÃ³n inicial del scroll
    scrollFunction();

    // Volver al inicio al hacer clic en el botÃ³n
    document.getElementById("backToTop").addEventListener("click", function() {
        // Scroll suave
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});