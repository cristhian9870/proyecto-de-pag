const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

const productos = {
  reloj1: {
    nombre: "Reloj Elegante Mujer",
    descripcion: "Diseño moderno con correa de cuero",
    precio: "S/. 89",
    imagen: "prd/reloj-mujer.jpg"
  },
  mochila: {
    nombre: "Mochila Urbana",
    descripcion: "Antirrobo, USB integrado",
    precio: "S/. 110",
    imagen: "prd/mochila.jpg"
  },
  lentes: {
    nombre: "Lentes de Sol",
    descripcion: "Protección UV400, estilo aviador",
    precio: "S/. 49",
    imagen: "prd/lentes.jpg"
  },
  cartera: {
    nombre: "Cartera Casual",
    descripcion: "Espaciosa y elegante",
    precio: "S/. 79",
    imagen: "prd/cartera.jpg"
  },
  correa: {
    nombre: "Correa de Cuero",
    descripcion: "Ajuste metálico, alta durabilidad",
    precio: "S/. 59",
    imagen: "prd/correa-cuero.jpg"
  },
  anillo: {
    nombre: "Anillo de Acero",
    descripcion: "Unisex, resistente al agua",
    precio: "S/. 39",
    imagen: "prd/anillo.jpg"
  },
  collar: {
    nombre: "Collar Minimalista",
    descripcion: "Baño de oro, diseño delicado",
    precio: "S/. 45",
    imagen: "prd/collar.jpg"
  },
  aretes: {
    nombre: "Aretes Elegantes",
    descripcion: "Diseño de perlas con baño de plata",
    precio: "S/. 49",
    imagen: "prd/aretes.jpg"
  },
  bufanda: {
    nombre: "Bufanda Unisex",
    descripcion: "Tejida, ideal para invierno",
    precio: "S/. 30",
    imagen: "prd/bufanda.jpg"
  },
  llavero: {
    nombre: "Llavero Capibara",
    descripcion: "Suave, con diseño kawaii",
    precio: "S/. 20",
    imagen: "prd/llavero.jpg"
  },
  monedero: {
    nombre: "Monedero Compacto",
    descripcion: "Cierre de seguridad, liviano",
    precio: "S/. 29",
    imagen: "prd/monedero.jpg"
  },
  pulsera: {
    nombre: "Pulsera de Cuero",
    descripcion: "Diseño trenzado, unisex",
    precio: "S/. 35",
    imagen: "prd/pulsera.jpg"
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
