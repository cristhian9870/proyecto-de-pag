const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

const productos = {
  product1: {
    nombre: "MOCHILA CAPIBARA",
    descripcion: "MOCHILA CAPIBARA MUY VIRAL",
    precio: "S/. 46,80",
    imagen: "img/capibara.jpg"
  },
  product2: {
    nombre: "HIDROLAVADORA",
    descripcion: "🚘HIDROLAVADORA DE 120 VOLTIOS INALÁMBRICO🏍",
    precio: "S/. 60,80",
    imagen: "img/hidro.jpeg"
  },
  product3: {
    nombre: "PERFUME",
    descripcion: "PERFUME DE MUJER INDIAN COLECTION",
    precio: "S/. 16,80",
    imagen: "img/PERFUME1.JPG"
  },
  product4: {
    nombre: "ZAPATILLA",
    descripcion: "ZAPATILLA PARA HOMBRE 👟👟",
    precio: "S/. 40,80",
    imagen: "img/ZAPA1.jpg"
  },
  product5: {
    nombre: "GUANTES",
    descripcion: "🧤GUANTES DE COMPRESIÓN PARA ARTRITIS",
    precio: "S/. 11,80",
    imagen: "img/GUANTES.jpg"
  },
  product6: {
    nombre: "TECLADO+MOUSE",
    descripcion: "⌨ KIT TECLADO+MOUSE INALÁMBRICO⌨",
    precio: "S/. 19,80",
    imagen: "img/KIT1.jpg"
  },
  product7: {
    nombre: "LABIALES",
    descripcion: "SET DE 12 LABIALES LIP GLOSS MATTE HUDA BEAUTY",
    precio: "S/. 24,80",
    imagen: "img/LABIAL.jpg"
  },
  product8: {
    nombre: "BOLSO",
    descripcion: "BOLSO IMPERMEABLE UNISEX",
    precio: "S/. 13,80",
    imagen: "img/BOLSO1.jpg"
  },
  product9: {
    nombre: "TALADRO MINI",
    descripcion: "MINI TALADRO INALÁMBRICO-RECARGABLE 🛠",
    precio: "S/. 20,80",
    imagen: "img/TALADRO1.jpg"
  },
  product10: {
    nombre: "MOCHILA CAPIBARA 3 EN 1",
    descripcion: "MOCHILA CAPIBARA 3 EN 1 3D CON LUCES",
    precio: "S/. 55,80",
    imagen: "img/CAPIBARA2.jpg"
  }
};

const producto = productos[productId];

if (producto) {
  document.getElementById("nombre").textContent = producto.nombre;
  document.getElementById("descripcion").textContent = producto.descripcion;
  document.getElementById("precio").textContent = producto.precio;
  document.getElementById("imagen").src = producto.imagen;
  document.getElementById("imagen").alt = producto.nombre;
} else {
  document.getElementById("detalle").innerHTML = "<h2>Producto no encontrado</h2>";
}