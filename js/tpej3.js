class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificarAlto(nuevoAlto) {
    this.alto = nuevoAlto;
  }

  modificarAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }

  mostrarPropiedades() {
    document.write(`<p>Alto: ${this.alto}, Ancho: ${this.ancho}</p>`);
  }

  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}

const rectangulo1 = new Rectangulo(5, 10);

document.write("<h2>Propiedades del rectángulo:</h2>");
rectangulo1.mostrarPropiedades();

document.write("<h2>Perímetro y Área del rectángulo:</h2>");
document.write(`<p>Perímetro: ${rectangulo1.calcularPerimetro()}</p>`);
document.write(`<p>Área: ${rectangulo1.calcularArea()}</p>`);

rectangulo1.modificarAlto(7);
rectangulo1.modificarAncho(12);

document.write(
  "<h2>Propiedades del rectángulo después de la modificación:</h2>"
);
rectangulo1.mostrarPropiedades();

document.write(
  "<h2>Perímetro y Área del rectángulo después de la modificación:</h2>"
);
document.write(`<p>Perímetro: ${rectangulo1.calcularPerimetro()}</p>`);
document.write(`<p>Área: ${rectangulo1.calcularArea()}</p>`);
