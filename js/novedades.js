document.addEventListener('DOMContentLoaded', function() {
    // Selección de elementos
    const carouselTrack = document.querySelector('.gallery-carousel-track');// Contenedor del carrusel
    const productWrappers = document.querySelectorAll('.product-card-wrapper');// Tarjetas de productos
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const carouselContainer = document.querySelector('.gallery-carousel-container');

    // 1. Clonación para efecto infinito (3 clones en cada extremo)
    const clonesStart = Array.from(productWrappers).slice(-3).map(card => {
        const clone = card.cloneNode(true);// Clona últimos 3
        clone.classList.add('js-clone');
        return clone;
    });
    
    const clonesEnd = Array.from(productWrappers).slice(0, 3).map(card => {
        const clone = card.cloneNode(true);
        clone.classList.add('js-clone');
        return clone;
    });

    clonesStart.forEach(clone => carouselTrack.insertBefore(clone, carouselTrack.firstChild));// Inserta al inicio
    clonesEnd.forEach(clone => carouselTrack.appendChild(clone));

    // 2. Variables de estado
    let currentIndex = 3; // Empieza después de los clones iniciales
    let cardWidth = productWrappers[0].offsetWidth + 20;
    let isAnimating = false; // Bloquea animaciones simultáneas
    let autoplayInterval;
    const totalItems = productWrappers.length;
    let isMouseOver = false;

    // 3. Función para mover el carrusel
    function moveCarousel(direction) {
        if (isAnimating || isMouseOver) return;
        
        isAnimating = true;
        currentIndex += direction;
        
        carouselTrack.style.transition = 'transform 0.5s ease-in-out';
        carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;// Desplazamiento
    }

    // 4. Manejador de transiciones
    carouselTrack.addEventListener('transitionend', () => {
        isAnimating = false;
        
        // Efecto infinito
        if (currentIndex >= totalItems + 3) {
            currentIndex = 3; // Reinicia al inicio real
            carouselTrack.style.transition = 'none'; // Sin animación
            carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        } 
        else if (currentIndex <= 0) {
            currentIndex = totalItems + 2;
            carouselTrack.style.transition = 'none';
            carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    // 5. Control de autoplay mejorado
    function startAutoplay() {
        if (!autoplayInterval) {
            autoplayInterval = setInterval(() => {
                if (!document.hidden && !isMouseOver) {
                    moveCarousel(1); // Solo si la pestaña está activa
                }
            }, 3000); // Mantenemos 3 segundos
        }
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
    }

    // 6. Event listeners mejorados
    nextArrow.addEventListener('click', () => {
        moveCarousel(1);
    });

    prevArrow.addEventListener('click', () => {
        moveCarousel(-1);
    });

    // 7. Manejo de hover CORREGIDO - Ahora con delegación de eventos
    carouselContainer.addEventListener('mouseover', (e) => {
        if (e.target.closest('.product-card-wrapper')) {
            isMouseOver = true;
            stopAutoplay();
        }
    });

    carouselContainer.addEventListener('mouseout', (e) => {
        if (e.target.closest('.product-card-wrapper')) {
            isMouseOver = false;
            startAutoplay();
        }
    });

    // 8. Inicialización
    function initCarousel() {
        cardWidth = productWrappers[0].offsetWidth + 20; // Ancho + margen
        carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`; // Posición inicial
        startAutoplay();
    }

    // 9. Observer para redimensionamiento
    const resizeObserver = new ResizeObserver(initCarousel);
    resizeObserver.observe(carouselContainer); // Recalcula al cambiar tamaño

    initCarousel();

    // 10. Pausar al hacer hover en las flechas también
    [prevArrow, nextArrow].forEach(arrow => {
        arrow.addEventListener('mouseenter', stopAutoplay);
        arrow.addEventListener('mouseleave', startAutoplay);
    });
});

// Selecciona todos los botones "Ver Detalles" para productos
document.querySelectorAll('.view-details-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Obtiene el ID del producto
        const productId = this.getAttribute('data-product-id');
        
        // Redirige a la página de detalle con el ID en la URL
        window.location.href = `novedades.html?id=${productId}`;
    });
});