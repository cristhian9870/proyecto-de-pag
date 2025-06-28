// document.addEventListener('DOMContentLoaded', () => {
//     const claimForm = document.getElementById('claimForm');

//     claimForm.addEventListener('submit', (event) => {
//         event.preventDefault(); // Evita el envío por defecto del formulario

//         // Captura de datos del reclamante
//         const documentType = document.getElementById('documentType').value;
//         const dniNumber = document.getElementById('dniNumber').value;
//         const names = document.getElementById('names').value;
//         const surnames = document.getElementById('surnames').value;
//         const email = document.getElementById('email').value;
//         const phoneNumber = document.getElementById('phoneNumber').value;
//         const province = document.getElementById('province').value;
//         const district = document.getElementById('district').value;
//         const address = document.getElementById('address').value;

//         // Captura de datos del detalle del reclamo
//         const claimType = document.getElementById('claimType').value;
//         const reason = document.getElementById('reason').value;
//         const claimDetails = document.getElementById('claimDetails').value;
//         const orderNumber = document.getElementById('orderNumber').value; // Opcional

//         // Creación de un objeto con los datos del reclamo
//         const claimData = {
//             datosReclamante: {
//                 tipoDocumento: documentType,
//                 numeroDNI: dniNumber,
//                 nombres: names,
//                 apellidos: surnames,
//                 correoContacto: email,
//                 numeroContacto: phoneNumber,
//                 provincia: province,
//                 distrito: district,
//                 direccionDomicilio: address
//             },
//             detalleReclamo: {
//                 tipo: claimType,
//                 motivo: reason,
//                 detalle: claimDetails,
//                 numeroPedido: orderNumber || 'No especificado' // Si no hay número de pedido, muestra 'No especificado'
//             }
//         };

//         console.log('Datos del Reclamo:', claimData);

//         // Aquí es donde normalmente enviarías los datos a un servidor usando Fetch API o XMLHttpRequest
//         // Ejemplo (descomenta para usar en un entorno real):
//         /*
//         fetch('/api/submit-claim', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(claimData)
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Respuesta del servidor:', data);
//             alert('¡Reclamo enviado con éxito!');
//             claimForm.reset(); // Limpia el formulario después del envío
//         })
//         .catch(error => {
//             console.error('Error al enviar el reclamo:', error);
//             alert('Hubo un error al enviar su reclamo. Por favor, inténtelo de nuevo.');
//         });
//         */

//         alert('Reclamo enviado. Revisa la consola para ver los datos.');
//         claimForm.reset(); // Limpia el formulario después de "enviar"
//     });
// });