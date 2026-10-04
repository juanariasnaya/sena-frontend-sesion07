document.addEventListener("DOMContentLoaded", () => {
    // Temporizador de 2 segundos para simular la carga
    setTimeout(() => {
        const spinner = document.getElementById("spinner-container");
        const mainContent = document.getElementById("main-content");

        // Ocultar el spinner (animación de CSS opacity/visibility)
        spinner.classList.add("hidden");

        // Mostrar el contenido principal, lo cual dispara la animación @keyframes
        mainContent.classList.remove("hidden-content");
        
        // Opcional: remover el spinner del DOM después de su transición
        setTimeout(() => {
            spinner.style.display = 'none';
        }, 500); 

    }, 2000);
});
