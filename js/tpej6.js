class Libro {
  constructor(ISBN, titulo, autor, numPaginas) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  }

  getISBN() {
    return this.ISBN;
  }

  setISBN(ISBN) {
    this.ISBN = ISBN;
  }

  getTitulo() {
    return this.titulo;
  }

  setTitulo(titulo) {
    this.titulo = titulo;
  }

  getAutor() {
    return this.autor;
  }

  setAutor(autor) {
    this.autor = autor;
  }

  getNumPaginas() {
    return this.numPaginas;
  }

  setNumPaginas(numPaginas) {
    this.numPaginas = numPaginas;
  }

  mostrarLibro() {
    return `El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`;
  }
}

const libro1 = new Libro(
  "978-84-376-0494-7",
  "Cien años de soledad",
  "Gabriel García Márquez",
  432
);
const libro2 = new Libro(
  "978-987-738-264-5",
  "El Aleph",
  "Jorge Luis Borges",
  224
);

document.write("<h2>Información de los libros:</h2>");
document.write(`<p>${libro1.mostrarLibro()}</p>`);
document.write(`<p>${libro2.mostrarLibro()}</p>`);

if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
  document.write(
    `<p>El libro "${libro1.getTitulo()}" tiene más páginas que el libro "${libro2.getTitulo()}".</p>`
  );
} else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
  document.write(
    `<p>El libro "${libro2.getTitulo()}" tiene más páginas que el libro "${libro1.getTitulo()}".</p>`
  );
} else {
  document.write("<p>Ambos libros tienen la misma cantidad de páginas.</p>");
}
