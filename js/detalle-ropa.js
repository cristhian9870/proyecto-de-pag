const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

const productos = {
  ropa1: {
    nombre: "Polo Hombre",
    descripcion: "100% algodón, varios colores",
    precio: "S/. 35",
    imagen: "prd/polo-hombre.jpg"
  },
  ropa2: {
    nombre: "Vestido Casual",
    descripcion: "Diseño moderno, fresco y elegante",
    precio: "S/. 79",
    imagen: "prd/vestido.jpg"
  },
  ropa3: {
    nombre: "Casaca Jean",
    descripcion: "Unisex, resistente y a la moda",
    precio: "S/. 120",
    imagen: "prd/casaca-jean.jpg"
  },
  ropa4: {
    nombre: "Pantalón Mujer",
    descripcion: "Estilo skinny, ideal para todo el día",
    precio: "S/. 69",
    imagen: "prd/pantalon-mujer.jpg"
  },
  ropa5: {
    nombre: "Conjunto Deportivo",
    descripcion: "Top + Leggins, ideal para gym",
    precio: "S/. 99",
    imagen: "prd/conjunto-deportivo.jpg"
  },
  ropa6: {
    nombre: "Chompa de Invierno",
    descripcion: "Forro térmico, capucha ajustable",
    precio: "S/. 110",
    imagen: "prd/chompa-invierno.jpg"
  },
  ropa7: {
    nombre: "Camisa Hombre",
    descripcion: "Formal y casual, slim fit",
    precio: "S/. 60",
    imagen: "prd/camisa-hombre.jpg"
  },
  ropa8: {
    nombre: "Blusa Mujer",
    descripcion: "Con botones y tela fresca",
    precio: "S/. 49",
    imagen: "prd/blusa.jpg"
  },
  ropa9: {
    nombre: "Polo Niño",
    descripcion: "Estampados divertidos, 4 a 10 años",
    precio: "S/. 29",
    imagen: "prd/polo-niño.jpg"
  },
  ropa10: {
    nombre: "Short Deportivo",
    descripcion: "Secado rápido, con bolsillos",
    precio: "S/. 45",
    imagen: "prd/short.jpg"
  },
  ropa11: {
    nombre: "Zapatillas Urbanas",
    descripcion: "Unisex, cómodas y resistentes",
    precio: "S/. 130",
    imagen: "prd/zapatillas.jpg"
  },
  ropa12: {
    nombre: "Gorra Urbana",
    descripcion: "Estilo casual con visera curva",
    precio: "S/. 35",
    imagen: "prd/gorra.jpg"
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