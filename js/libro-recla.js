// script.js

document.getElementById('claimForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

    const form = event.target;
    const formData = new FormData(form);
    const data = {};

    // Convertir FormData a un objeto JavaScript simple
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    // Validación básica de campos obligatorios
    if (!data.documentType || !data.dniNumber || !data.names || !data.surnames || !data.email || !data.phoneNumber || !data.province || !data.district || !data.address || !data.claimType || !data.reason || !data.claimDetails) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    try {
        // Asumiendo que tu servidor local se ejecuta en http://localhost:3000
        // Puedes cambiar esta URL por la IP y puerto de tu servidor local
        const response = await fetch('http://localhost:3000/submit-claim', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            //const result = await response.json();
            alert('¡Su reclamo ha sido enviado con éxito! Recibirá una confirmación en su correo.');
            form.reset(); // Limpiar el formulario
        } else {
            const errorText = await response.text();
            alert('¡Su reclamo ha sido enviado con éxito! Recibirá una confirmación en su correo.');
        }
    } catch (error) {
        console.error('Error al enviar el reclamo:', error);
        alert('No se pudo conectar con el servidor. Asegúrese de que el servidor esté funcionando.');
    }
});