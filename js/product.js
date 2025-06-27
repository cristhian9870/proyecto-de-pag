document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el ID del producto de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');


    // Datos de ejemplo (en un caso real, esto vendría de una API o JSON)
    const products = {
        '1': {
            title: 'Antifaz con Gel',
            description: 'Antifaz Relajante con Gel Refrescante.',
            price: 'S/. 6,80',
            image: 'img/ANTIFAZ-KAWAI.jpg'
        },
        '2': {
            title: 'Luces Discoteca con Parlante y USB',
            description: 'Ilumina y anima tus fiestas con ritmo y colores.',
            price: 'S/. 20,80',
            image: 'img/LUZ-DISCOTECA.jpg'
        },
        '3': {
            title: 'Kit Teclado + Mause Inalámbrico',
            description: 'Teclado + mouse inalámbrico: prácticos y sin cables.',
            price: 'S/. 19,80',
            image: 'img/KIT-TECLADO-MAUSE.jpg'
        },
        '4': {
            title: 'Pulsera de Capibara con Mochila',
            description: 'Pulsera-mochila de capibara: moda y funcionalidad.',
            price: 'S/. 12.80',
            image: 'img/PULSERA-CAPIBARA.jpg'
        },
        '5': {
            title: 'Guantes Tácticos',
            description: 'Guantes tácticos: seguridad y alto rendimiento.',
            price: 'S/. 12,80',
            image: 'img/GUANTES-TACTICOS.jpg'
        },
        '6': {
            title: 'Protector de Celular Capibara',
            description: 'Funda capibara: protege tu celular con estilo.',
            price: 'S/. 7,80',
            image: 'img/PROTECTOR-CAPIBARA.jpg"'
        }
    };

    // Muestra los datos del producto
    if (products[productId]) {
        const product = products[productId];
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-image').src = product.image;
    } else {
        // Si el ID no existe, redirige al inicio
        window.location.href = 'index.html';
    }
});