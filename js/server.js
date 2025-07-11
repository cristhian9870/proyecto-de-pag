// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer'); // Importa Nodemailer

const app = express();
const PORT = 3000;

// --- Configuración de Nodemailer (¡Asegúrate de reemplazar con tus datos!) ---
const transporter = nodemailer.createTransport({
    service: 'gmail', // Puedes usar 'outlook', 'hotmail', o configurar un host SMTP personalizado
    auth: {
        user: 'alemanero1234@gmail.com', // Reemplaza con tu dirección de correo electrónico
        pass: 'Perros123@' // Reemplaza con tu contraseña de aplicación (si es Gmail) o tu contraseña normal
    }
});
// --- Fin de la Configuración de Nodemailer ---

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Ruta para recibir los reclamos y enviar el correo
app.post('/submit-claim', async (req, res) => {
    const claimData = req.body;
    console.log('Datos del reclamo recibidos:', claimData);

    // Formatear los datos del reclamo para el cuerpo del correo
    const emailContent = `
        <h1>Nuevo Reclamo Recibido</h1>
        <p><strong>Fecha y Hora:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <h2>Datos del Reclamante:</h2>
        <ul>
            <li><strong>Tipo de Documento:</strong> ${claimData.documentType}</li>
            <li><strong>Número de Documento:</strong> ${claimData.dniNumber}</li>
            <li><strong>Nombres:</strong> ${claimData.names}</li>
            <li><strong>Apellidos:</strong> ${claimData.surnames}</li>
            <li><strong>Correo de Contacto:</strong> ${claimData.email}</li>
            <li><strong>Número de Contacto:</strong> ${claimData.phoneNumber}</li>
            <li><strong>Provincia:</strong> ${claimData.province}</li>
            <li><strong>Distrito:</strong> ${claimData.district}</li>
            <li><strong>Dirección:</strong> ${claimData.address}</li>
        </ul>
        <hr>
        <h2>Detalle del Reclamo:</h2>
        <ul>
            <li><strong>Tipo de Reclamo:</strong> ${claimData.claimType}</li>
            <li><strong>Motivo:</strong> ${claimData.reason}</li>
            <li><strong>Número de Pedido (opcional):</strong> ${claimData.orderNumber || 'N/A'}</li>
        </ul>
        <p><strong>Detalle:</strong></p>
        <p>${claimData.claimDetails}</p>
        <hr>
        <p>Este es un mensaje automático del Libro de Reclamaciones.</p>
    `;

    const mailOptions = {
        from: 'alemanero1234@gmail.com', // El mismo correo de la configuración de Nodemailer
        to: 'alemanero1234@ejemplo.com', // Reemplaza con el correo donde quieres recibir los reclamos
        subject: `Nuevo Reclamo del Libro de Reclamaciones - ${claimData.names} ${claimData.surnames}`,
        html: emailContent // Contenido del correo en formato HTML
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Correo de reclamo enviado con éxito.');
        res.status(200).json({ message: 'Reclamo enviado y correo enviado.' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).send('Error interno del servidor al enviar el correo.');
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor de reclamos escuchando en http://localhost:${PORT}`);
    console.log(`Los reclamos se enviarán desde: tu_correo_de_envio@gmail.com`); // Actualiza esto también
    console.log(`Los reclamos se enviarán a: correo_destino@ejemplo.com`); // Actualiza esto también
});