const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

const productos = {
  laptop1: {
    nombre: "Laptop Lenovo",
    descripcion: "Intel i5 10ma Gen, 8GB RAM, SSD 256GB",
    precio: "S/. 1,880",
    imagen: "prd/laptop1.jpg"
  },
  audifonos: {
    nombre: "Audífonos Inalámbricos",
    descripcion: "Bluetooth 5.1, cancelación de ruido",
    precio: "S/. 120",
    imagen: "prd/audifonos.jpg"
  },
  mouse: {
    nombre: "Mouse Gamer RGB",
    descripcion: "Alta precisión, 7 botones programables",
    precio: "S/. 65",
    imagen: "prd/mouse-gamer.jpg"
  },
  tablet: {
    nombre: "Tablet 10” Android",
    descripcion: "Wi-Fi + 4G, 64GB almacenamiento",
    precio: "S/. 350",
    imagen: "prd/tabled.jpg"
  },
  parlante: {
    nombre: "Parlante Portátil",
    descripcion: "Sonido estéreo, batería 10 horas",
    precio: "S/. 89",
    imagen: "prd/parlante.jpg"
  },
  camara: {
    nombre: "Cámara de Seguridad",
    descripcion: "360°, visión nocturna, app móvil",
    precio: "S/. 159",
    imagen: "prd/camara-seguridad.jpg"
  },
  smartwatch: {
    nombre: "Smartwatch Deportivo",
    descripcion: "Monitor de ritmo, llamadas, notificaciones",
    precio: "S/. 140",
    imagen: "prd/smartwatch.jpg"
  },
  teclado: {
    nombre: "Teclado Mecánico",
    descripcion: "Iluminado RGB, switches blue",
    precio: "S/. 180",
    imagen: "prd/teclado-mecanico.jpg"
  },
  powerbank: {
    nombre: "Powerbank 10000mAh",
    descripcion: "Carga rápida, doble salida USB",
    precio: "S/. 95",
    imagen: "prd/powerbank.jpg"
  },
  cargador: {
    nombre: "Cargador Inalámbrico",
    descripcion: "Compatible con iPhone y Android",
    precio: "S/. 49",
    imagen: "prd/cargador-inalambrico.jpg"
  },
  hubusb: {
    nombre: "Hub USB 4 Puertos",
    descripcion: "USB 3.0, rápido y compacto",
    precio: "S/. 39",
    imagen: "prd/hub-usb.jpg"
  },
  soporte: {
    nombre: "Soporte para Laptop",
    descripcion: "Aluminio, antideslizante",
    precio: "S/. 59",
    imagen: "prd/soporte-laptop.jpg"
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