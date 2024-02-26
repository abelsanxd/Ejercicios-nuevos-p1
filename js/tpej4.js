class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    document.write(
      `<p>Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}</p>`
    );
  }
}

const productos = [
  { codigo: "001", nombre: "Camiseta", precio: 20 },
  { codigo: "002", nombre: "Pantalón", precio: 30 },
  { codigo: "003", nombre: "Zapatos", precio: 50 },
];

document.write("<h2>Productos:</h2>");
productos.forEach((producto) => {
  const { codigo, nombre, precio } = producto;
  const prod = new Producto(codigo, nombre, precio);
  prod.imprimeDatos();
});
