// document.addEventListener('DOMContentLoaded', function() {
//     // Selección de elementos
//     const carouselTrack = document.querySelector('.gallery-carousel-track');// Contenedor del carrusel
//     const productWrappers = document.querySelectorAll('.product-card-wrapper');// Tarjetas de productos
//     const prevArrow = document.querySelector('.prev-arrow');
//     const nextArrow = document.querySelector('.next-arrow');
//     const carouselContainer = document.querySelector('.gallery-carousel-container');

//     // 1. Clonación para efecto infinito (3 clones en cada extremo)
//     const clonesStart = Array.from(productWrappers).slice(-3).map(card => {
//         const clone = card.cloneNode(true);// Clona últimos 3
//         clone.classList.add('js-clone');
//         return clone;
//     });
    
//     const clonesEnd = Array.from(productWrappers).slice(0, 3).map(card => {
//         const clone = card.cloneNode(true);
//         clone.classList.add('js-clone');
//         return clone;
//     });

//     clonesStart.forEach(clone => carouselTrack.insertBefore(clone, carouselTrack.firstChild));// Inserta al inicio
//     clonesEnd.forEach(clone => carouselTrack.appendChild(clone));

//     // 2. Variables de estado
//     let currentIndex = 3; // Empieza después de los clones iniciales
//     let cardWidth = productWrappers[0].offsetWidth + 20;
//     let isAnimating = false; // Bloquea animaciones simultáneas
//     let autoplayInterval;
//     const totalItems = productWrappers.length;
//     let isMouseOver = false;

//     // 3. Función para mover el carrusel
//     function moveCarousel(direction) {
//         if (isAnimating || isMouseOver) return;
        
//         isAnimating = true;
//         currentIndex += direction;
        
//         carouselTrack.style.transition = 'transform 0.5s ease-in-out';
//         carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;// Desplazamiento
//     }

//     // 4. Manejador de transiciones
//     carouselTrack.addEventListener('transitionend', () => {
//         isAnimating = false;
        
//         // Efecto infinito
//         if (currentIndex >= totalItems + 3) {
//             currentIndex = 3; // Reinicia al inicio real
//             carouselTrack.style.transition = 'none'; // Sin animación
//             carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
//         } 
//         else if (currentIndex <= 0) {
//             currentIndex = totalItems + 2;
//             carouselTrack.style.transition = 'none';
//             carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
//         }
//     });

//     // 5. Control de autoplay mejorado
//     function startAutoplay() {
//         if (!autoplayInterval) {
//             autoplayInterval = setInterval(() => {
//                 if (!document.hidden && !isMouseOver) {
//                     moveCarousel(1); // Solo si la pestaña está activa
//                 }
//             }, 3000); // Mantenemos 3 segundos
//         }
//     }

//     function stopAutoplay() {
//         clearInterval(autoplayInterval);
//         autoplayInterval = null;
//     }

//     // 6. Event listeners mejorados
//     nextArrow.addEventListener('click', () => {
//         moveCarousel(1);
//     });

//     prevArrow.addEventListener('click', () => {
//         moveCarousel(-1);
//     });

//     // 7. Manejo de hover CORREGIDO - Ahora con delegación de eventos
//     carouselContainer.addEventListener('mouseover', (e) => {
//         if (e.target.closest('.product-card-wrapper')) {
//             isMouseOver = true;
//             stopAutoplay();
//         }
//     });

//     carouselContainer.addEventListener('mouseout', (e) => {
//         if (e.target.closest('.product-card-wrapper')) {
//             isMouseOver = false;
//             startAutoplay();
//         }
//     });

//     // 8. Inicialización
//     function initCarousel() {
//         cardWidth = productWrappers[0].offsetWidth + 20; // Ancho + margen
//         carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`; // Posición inicial
//         startAutoplay();
//     }

//     // 9. Observer para redimensionamiento
//     const resizeObserver = new ResizeObserver(initCarousel);
//     resizeObserver.observe(carouselContainer); // Recalcula al cambiar tamaño

//     initCarousel();

//     // 10. Pausar al hacer hover en las flechas también
//     [prevArrow, nextArrow].forEach(arrow => {
//         arrow.addEventListener('mouseenter', stopAutoplay);
//         arrow.addEventListener('mouseleave', startAutoplay);
//     });
// });

// // Selecciona todos los botones "Ver Detalles" para productos
// document.querySelectorAll('.view-details-btn').forEach(button => {
//     button.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         // Obtiene el ID del producto
//         const productId = this.getAttribute('data-product-id');
        
//         // Redirige a la página de detalle con el ID en la URL
//         window.location.href = `novedades.html?id=${productId}`;
//     });
// });

// esta parte es de puebas :

document.addEventListener('DOMContentLoaded', function() {
    // Selección de elementos
    const carouselTrack = document.querySelector('.gallery-carousel-track');
    // Ahora seleccionamos los enlaces de las tarjetas, no los wrappers directos
    const productCardLinks = document.querySelectorAll('.product-card-link'); 
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const carouselContainer = document.querySelector('.gallery-carousel-container');

    // Verificar que todos los elementos necesarios estén presentes
    if (!carouselTrack || !prevArrow || !nextArrow || productCardLinks.length === 0) {
        console.error("Uno o más elementos del carrusel no se encontraron. Asegúrate de que los selectores CSS sean correctos.");
        return; // Salir si falta algún elemento crucial
    }

    // 1. Clonación para efecto infinito (3 clones en cada extremo)
    // Se clonan los últimos 3 elementos para el inicio
    const clonesStart = Array.from(productCardLinks).slice(-3).map(link => {
        const clone = link.cloneNode(true); // Clona el nodo y todo su contenido
        clone.classList.add('js-clone'); // Añade una clase para identificar los clones
        // Eliminar IDs duplicados para evitar conflictos
        clone.removeAttribute('id'); 
        clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
        return clone;
    });
    
    // Se clonan los primeros 3 elementos para el final
    const clonesEnd = Array.from(productCardLinks).slice(0, 3).map(link => {
        const clone = link.cloneNode(true);
        clone.classList.add('js-clone');
        // Eliminar IDs duplicados para evitar conflictos
        clone.removeAttribute('id');
        clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
        return clone;
    });

    // Insertar los clones al inicio y al final del track
    clonesStart.forEach(clone => carouselTrack.insertBefore(clone, carouselTrack.firstChild));
    clonesEnd.forEach(clone => carouselTrack.appendChild(clone));

    // 2. Variables de estado
    // El índice inicial debe considerar los clones al principio
    let currentIndex = 3; 
    // Calcula el ancho de una tarjeta, incluyendo sus márgenes horizontales
    // Ahora usamos el primer 'product-card-link' para calcular el ancho
    let cardWidth = productCardLinks[0].offsetWidth + 
                    parseFloat(getComputedStyle(productCardLinks[0]).marginLeft) + 
                    parseFloat(getComputedStyle(productCardLinks[0]).marginRight);
    let isAnimating = false; // Bandera para evitar animaciones superpuestas
    let autoplayInterval; // Variable para el intervalo de autoplay
    const totalOriginalItems = productCardLinks.length; // Número de elementos originales
    const totalClonedItems = 3; // Número de clones en cada extremo
    let isMouseOver = false; // Bandera para saber si el ratón está sobre el carrusel

    // 3. Función para mover el carrusel
    function moveCarousel(direction) {
        // Si ya hay una animación en curso o el ratón está sobre, no hacer nada
        if (isAnimating || isMouseOver) return; 
        
        isAnimating = true; // Establecer la bandera a true
        currentIndex += direction; // Actualizar el índice

        // Aplicar la transición y el desplazamiento
        carouselTrack.style.transition = 'transform 0.5s ease-in-out';
        carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    // 4. Manejador de transiciones
    carouselTrack.addEventListener('transitionend', () => {
        isAnimating = false; // La animación ha terminado, restablecer la bandera
        
        // Lógica para el efecto infinito (teletransporte)
        if (currentIndex >= totalOriginalItems + totalClonedItems) {
            // Si llegamos al final de los elementos originales + clones del final,
            // saltar al inicio de los elementos originales (después de los clones iniciales)
            currentIndex = totalClonedItems; 
            carouselTrack.style.transition = 'none'; // Desactivar la transición para el salto
            carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        } 
        else if (currentIndex < totalClonedItems) {
            // Si llegamos al inicio de los clones iniciales,
            // saltar al final de los elementos originales (antes de los clones finales)
            currentIndex = totalOriginalItems + totalClonedItems - 1; // Ajuste para el último original
            carouselTrack.style.transition = 'none';
            carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    // 5. Control de autoplay mejorado
    function startAutoplay() {
        if (!autoplayInterval) { // Solo iniciar si no hay un intervalo ya corriendo
            autoplayInterval = setInterval(() => {
                // Mover el carrusel solo si la pestaña está activa y el ratón no está sobre él
                if (!document.hidden && !isMouseOver) {
                    moveCarousel(1); // Mover una posición hacia adelante
                }
            }, 3000); // Intervalo de 3 segundos (3000 milisegundos)
        }
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval); // Detener el intervalo de autoplay
        autoplayInterval = null; // Limpiar la variable
    }

    // 6. Event listeners para las flechas
    nextArrow.addEventListener('click', () => {
        moveCarousel(1); // Mover hacia adelante
    });

    prevArrow.addEventListener('click', () => {
        moveCarousel(-1); // Mover hacia atrás
    });

    // 7. Manejo de hover (delegación de eventos)
    // Detectar si el ratón entra o sale de cualquier tarjeta de producto dentro del contenedor
    carouselContainer.addEventListener('mouseover', (e) => {
        // closest() verifica si el elemento sobre el que se pasó el ratón o un ancestro es una tarjeta
        if (e.target.closest('.product-card-link')) { // Ahora buscamos el .product-card-link
            isMouseOver = true;
            stopAutoplay(); // Pausar autoplay al pasar el ratón sobre una tarjeta
        }
    });

    carouselContainer.addEventListener('mouseout', (e) => {
        if (e.target.closest('.product-card-link')) { // Ahora buscamos el .product-card-link
            isMouseOver = false;
            startAutoplay(); // Reanudar autoplay al quitar el ratón de una tarjeta
        }
    });

    // 8. Inicialización del carrusel
    function initCarousel() {
        // Recalcular el ancho de la tarjeta en caso de redimensionamiento
        // Usamos el primer 'product-card-link' para el cálculo
        if (productCardLinks.length > 0) {
            cardWidth = productCardLinks[0].offsetWidth + 
                        parseFloat(getComputedStyle(productCardLinks[0]).marginLeft) + 
                        parseFloat(getComputedStyle(productCardLinks[0]).marginRight);
        }
        
        // Establecer la posición inicial del carrusel (después de los clones)
        carouselTrack.style.transition = 'none'; // Desactivar transición para el ajuste inicial
        carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`; 
        
        // Reanudar el autoplay si no estaba pausado por hover
        if (!isMouseOver) {
            startAutoplay();
        }
    }

    // 9. Observer para redimensionamiento
    // Monitorea cambios en el tamaño del contenedor del carrusel
    const resizeObserver = new ResizeObserver(() => {
        stopAutoplay(); // Detener autoplay antes de recalcular
        initCarousel(); // Recalcular y reiniciar
    });
    resizeObserver.observe(carouselContainer); // Observar el contenedor principal del carrusel

    // 10. Pausar/reanudar autoplay al hacer hover en las flechas también
    [prevArrow, nextArrow].forEach(arrow => {
        arrow.addEventListener('mouseenter', stopAutoplay);
        arrow.addEventListener('mouseleave', startAutoplay);
    });

    // Llamada inicial para configurar el carrusel cuando el DOM esté listo
    initCarousel();
});

// El código para los botones "Ver Detalles" ha sido eliminado de aquí,
// ya que toda la tarjeta ahora es un enlace.
