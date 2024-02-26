const biblioteca = {
  libros: [],

  agregarLibro: function (titulo) {
    this.libros.push({ titulo: titulo, disponible: true });
  },

  buscarPorTitulo: function (titulo) {
    const libroEncontrado = this.libros.find(
      (libro) => libro.titulo === titulo
    );
    if (libroEncontrado) {
      return libroEncontrado;
    } else {
      return "Libro no encontrado";
    }
  },

  verificarDisponibilidad: function (titulo) {
    const libro = this.buscarPorTitulo(titulo);
    if (libro && libro.disponible) {
      return "El libro está disponible para préstamo";
    } else if (libro && !libro.disponible) {
      return "El libro no está disponible para préstamo";
    } else {
      return "Libro no encontrado";
    }
  },

  prestarLibro: function (titulo) {
    const libro = this.buscarPorTitulo(titulo);
    if (libro && libro.disponible) {
      libro.disponible = false;
      return "Préstamo exitoso";
    } else if (libro && !libro.disponible) {
      return "El libro no está disponible para préstamo";
    } else {
      return "Libro no encontrado";
    }
  },

  devolverLibro: function (titulo) {
    const libro = this.buscarPorTitulo(titulo);
    if (libro && !libro.disponible) {
      libro.disponible = true;
      return "Devolución exitosa";
    } else if (libro && libro.disponible) {
      return "El libro no estaba prestado";
    } else {
      return "Libro no encontrado";
    }
  },
};

biblioteca.agregarLibro("Cien años de soledad");
biblioteca.agregarLibro("El amor en los tiempos del cólera");

document.write(`<h2>Resultados:</h2>`);
document.write(`<p>${biblioteca.buscarPorTitulo("Cien años de soledad")}</p>`);
document.write(
  `<p>${biblioteca.verificarDisponibilidad("Cien años de soledad")}</p>`
);
document.write(`<p>${biblioteca.prestarLibro("Cien años de soledad")}</p>`);
document.write(
  `<p>${biblioteca.verificarDisponibilidad("Cien años de soledad")}</p>`
);
document.write(`<p>${biblioteca.devolverLibro("Cien años de soledad")}</p>`);
document.write(
  `<p>${biblioteca.verificarDisponibilidad("Cien años de soledad")}</p>`
);
