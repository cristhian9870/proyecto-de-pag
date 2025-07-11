// document.addEventListener('DOMContentLoaded', function() {
//     // Obtiene el ID del producto de la URL
//     const urlParams = new URLSearchParams(window.location.search);
//     const productId = urlParams.get('id');


//     // Datos de ejemplo (en un caso real, esto vendría de una API o JSON)
//     const products = {
//         '1': {
//             title: 'Antifaz con Gel',
//             description: 'Antifaz Relajante con Gel Refrescante.',
//             price: 'S/. 6,80',
//             image: 'img/ANTIFAZ-KAWAI.jpg'
//         },
//         '2': {
//             title: 'Luces Discoteca con Parlante y USB',
//             description: 'Ilumina y anima tus fiestas con ritmo y colores.',
//             price: 'S/. 20,80',
//             image: 'img/LUZ-DISCOTECA.jpg'
//         },
//         '3': {
//             title: 'Kit Teclado + Mause Inalámbrico',
//             description: 'Teclado + mouse inalámbrico: prácticos y sin cables.',
//             price: 'S/. 19,80',
//             image: 'img/KIT-TECLADO-MAUSE.jpg'
//         },
//         '4': {
//             title: 'Pulsera de Capibara con Mochila',
//             description: 'Pulsera-mochila de capibara: moda y funcionalidad.',
//             price: 'S/. 12.80',
//             image: 'img/PULSERA-CAPIBARA.jpg'
//         },
//         '5': {
//             title: 'Guantes Tácticos',
//             description: 'Guantes tácticos: seguridad y alto rendimiento.',
//             price: 'S/. 12,80',
//             image: 'img/GUANTES-TACTICOS.jpg'
//         },
//         '6': {
//             title: 'Protector de Celular Capibara',
//             description: 'Funda capibara: protege tu celular con estilo.',
//             price: 'S/. 7,80',
//             image: 'img/PROTECTOR-CAPIBARA.jpg'
//         }
//     };

//     // Muestra los datos del producto
//     if (products[productId]) {
//         const product = products[productId];
//         document.getElementById('product-title').textContent = product.title;
//         document.getElementById('product-description').textContent = product.description;
//         document.getElementById('product-price').textContent = product.price;
//         document.getElementById('product-image').src = product.image;
//     } else {
//         // Si el ID no existe, redirige al inicio
//         window.location.href = 'index.html';
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener el ID del producto de la URL
    // La URL de la página de detalle se verá algo así: novedades.html?id=product1
    // URLSearchParams nos permite extraer el valor del parámetro 'id'.
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Mensaje de depuración: Verifica si el ID del producto se obtuvo correctamente de la URL.
    console.log('DEBUG: Product ID from URL:', productId);

    // 2. Definir los datos de los productos
    // Las claves del objeto 'productos' ahora coinciden con el formato 'productX'
    const productos = {
        product1: { // Clave 'product1'
            nombre: 'Antifaz con Gel',
            descripcion: 'Antifaz Relajante con Gel Refrescante.',
            precio: 'S/. 6,80',
            imagen: 'img/ANTIFAZ-KAWAI.jpg' // Asegúrate de que esta ruta sea correcta
        },
        product2: { // Clave 'product2'
            nombre: 'Luces Discoteca con Parlante y USB',
            descripcion: 'Ilumina y anima tus fiestas con ritmo y colores.',
            precio: 'S/. 20,80',
            imagen: 'img/LUZ-DISCOTECA.jpg' // Asegúrate de que esta ruta sea correcta
        },
        product3: { // Clave 'product3'
            nombre: 'Kit Teclado + Mause Inalámbrico',
            descripcion: 'Teclado + mouse inalámbrico: prácticos y sin cables.',
            precio: 'S/. 19,80',
            imagen: 'img/KIT-TECLADO-MAUSE.jpg' // Asegúrate de que esta ruta sea correcta
        },
        product4: { // Clave 'product4'
            nombre: 'Pulsera de Capibara con Mochila',
            descripcion: 'Pulsera-mochila de capibara: moda y funcionalidad.',
            precio: 'S/. 12.80',
            imagen: 'img/PULSERA-CAPIBARA.jpg' // Asegúrate de que esta ruta sea correcta
        },
        product5: { // Clave 'product5'
            nombre: 'Guantes Tácticos',
            descripcion: 'Guantes tácticos: seguridad y alto rendimiento.',
            precio: 'S/. 12,80',
            imagen: 'img/GUANTES-TACTICOS.jpg' // Asegúrate de que esta ruta sea correcta
        },
        product6: { // Clave 'product6'
            nombre: 'Protector de Celular Capibara',
            descripcion: 'Funda capibara: protege tu celular con estilo.',
            precio: 'S/. 7,80',
            imagen: 'img/PROTECTOR-CAPIBARA.jpg' // Asegúrate de que esta ruta sea correcta
        }
    };

    // 3. Obtener referencias a los elementos HTML donde se mostrará la información
    // ¡Los IDs de los elementos ahora coinciden con los del código de tu compañero!
    const productTitleElem = document.getElementById('nombre');
    const productDescriptionElem = document.getElementById('descripcion');
    const productPriceElem = document.getElementById('precio');
    const productImageElem = document.getElementById('imagen');
    const productDetailContainer = document.getElementById('detalle'); // Usamos getElementById para 'detalle'

    // 4. Verificar si el producto existe en nuestros datos y mostrar su información
    const producto = productos[productId]; // Accedemos al producto usando el ID obtenido de la URL

    if (producto) {
        console.log('DEBUG: Product data found:', producto); // Mensaje de depuración: Datos del producto encontrado

        // Asignar los datos a los elementos HTML
        if (productTitleElem) {
            productTitleElem.textContent = producto.nombre; // Usamos producto.nombre
        } else {
            console.warn('WARNING: Element with ID "nombre" not found in novedades.html.');
        }

        if (productDescriptionElem) {
            productDescriptionElem.textContent = producto.descripcion; // Usamos producto.descripcion
        } else {
            console.warn('WARNING: Element with ID "descripcion" not found in novedades.html.');
        }

        if (productPriceElem) {
            productPriceElem.textContent = producto.precio; // Usamos producto.precio
        } else {
            console.warn('WARNING: Element with ID "precio" not found in novedades.html.');
        }

        if (productImageElem) {
            productImageElem.src = producto.imagen; // Usamos producto.imagen
            productImageElem.alt = producto.nombre; // También actualizamos el atributo alt de la imagen
            // Manejador de error para la imagen: si la imagen no carga, muestra un mensaje en consola
            productImageElem.onerror = () => {
                console.error(`ERROR: Failed to load image for product ${productId}: ${producto.imagen}. Check image path and file existence.`);
                // Opcional: Mostrar una imagen de fallback si la original falla
                productImageElem.src = 'https://placehold.co/400x300/CCCCCC/333333?text=Imagen+no+disponible'; 
            };
        } else {
            console.warn('WARNING: Element with ID "imagen" not found in novedades.html.');
        }
        
        console.log('DEBUG: DOM elements updated for product ID:', productId); // Mensaje de depuración: Confirmación de actualización
    } else {
        // 5. Si el ID del producto no existe en nuestros datos
        console.warn('WARNING: Product ID not found in data:', productId); // Mensaje de depuración: ID no encontrado
        
        // Mostrar un mensaje de error en la página
        if (productDetailContainer) {
            productDetailContainer.innerHTML = `
                <p style="color: red; font-size: 1.5em; margin-top: 50px;">¡Oops! Producto no encontrado.</p>
                <p style="color: #666; margin-bottom: 30px;">Parece que el producto que buscas no existe o ha sido retirado.</p>
                <a href="index.html" class="back-btn">Volver a Novedades</a>
            `;
        } else {
            // Fallback: si ni siquiera el contenedor principal se encuentra, redirige directamente
            console.error('ERROR: .product-detail container not found. Redirecting to index.html.');
            window.location.href = 'index.html'; 
        }
    }
});

