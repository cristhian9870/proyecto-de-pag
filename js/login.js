

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const mensaje = document.getElementById('mensaje');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const correo = document.getElementById('correo').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios.find(u => u.correo === correo);

    if (!usuario) {
      mensaje.textContent = " El correo no está registrado.";
      mensaje.style.color = "red";
    } else if (usuario.contrasena !== contrasena) {
      mensaje.textContent = " La contraseña es incorrecta.";
      mensaje.style.color = "red";
    } else {
      mensaje.textContent = "¡Inicio de sesión exitoso! Redirigiendo...";
      mensaje.style.color = "green";

      localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    }
  });
});
