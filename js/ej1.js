const producto = [
  "Teclado",
  "Mouse",
  "Auricular",
  "SSD",
  "Monitor",
  "Microfono",
  "Joystick",
];
const precios = [20, 40, 10, 60, 50, 30, 100];

function agregarProducto(nombre, precio) {
  producto.push(nombre);
  precios.push(precio);
}

function eliminarProducto(nombre) {
  const indice = producto.indexOf(nombre);
  if (indice !== -1) {
    producto.splice(indice, 1);
    precios.splice(indice, 1);
  }
}

function calcularValorTotal() {
  let total = 0;
  for (let i = 0; i < producto.length; i++) {
    total += precios[i];
  }
  return total;
}

const mostrarArray = (titulo, arrayNuevo) => {
  document.write(`<h2>${titulo} </h2>`);
  document.write(`<ul>`);
  arrayNuevo.map((producto) => document.write(`<li>${producto}</li>`));
  document.write(`</ul>`);
};

mostrarArray("Lista de productos", producto);
mostrarArray("Lista de precios", precios);
document.write(`Valor total ${calcularValorTotal()}`);

agregarProducto("Gabinete", 115);
mostrarArray("Lista de productos actualizada", producto);
mostrarArray("Lista de precios actualizada", precios);
document.write(`Valor total ${calcularValorTotal()}`);

eliminarProducto("Monitor");
mostrarArray("Lista de productos elimando Monitor", producto);
mostrarArray("Lista de precios eliminando Monitor", precios);
document.write(`Valor total ${calcularValorTotal()}`);
