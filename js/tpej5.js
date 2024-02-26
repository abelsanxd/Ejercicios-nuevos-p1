class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  mostrarGeneracion() {
    const generaciones = [
      {
        nombre: "Generación Z",
        inicio: 1995,
        fin: 2012,
        rasgo: "Conectados a la tecnología desde temprana edad",
      },
      {
        nombre: "Millennials",
        inicio: 1981,
        fin: 1994,
        rasgo: "Crecieron con el auge de internet y las redes sociales",
      },
      {
        nombre: "Generación X",
        inicio: 1965,
        fin: 1980,
        rasgo: "Experimentaron la transición a la era digital",
      },
      {
        nombre: "Baby Boomers",
        inicio: 1946,
        fin: 1964,
        rasgo: "Vivieron grandes cambios socioeconómicos y culturales",
      },
      {
        nombre: "Silent Generation",
        inicio: 1928,
        fin: 1945,
        rasgo:
          "Crecieron durante la Gran Depresión y la Segunda Guerra Mundial",
      },
    ];

    const añoActual = new Date().getUTCFullYear();
    const edadAproximada = añoActual - this.añoNacimiento;

    document.write(
      `<p>Nombre: ${this.nombre}, Año de nacimiento: ${this.añoNacimiento}, Año actual: ${añoActual}, Edad aproximada: ${edadAproximada}</p>`
    );

    generaciones.forEach((gen) => {
      document.write(
        `<p>Generación: ${gen.nombre}, Inicio: ${gen.inicio}, Fin: ${gen.fin}</p>`
      );
    });

    const generacion = generaciones.find(
      (gen) => this.añoNacimiento >= gen.inicio && this.añoNacimiento <= gen.fin
    );

    if (generacion) {
      document.write(
        `<p>${this.nombre} pertenece a la ${generacion.nombre}. ${generacion.rasgo}</p>`
      );
    } else {
      document.write(
        `<p>No se pudo determinar la generación de ${this.nombre}</p>`
      );
    }
  }
}

// Ejemplo de uso
const persona1 = new Persona("Juan", 25, "12345678A", "H", 70, 170, 1995);
const persona2 = new Persona("María", 35, "87654321B", "M", 60, 160, 1985);

document.write("<h2>Generaciones de las Personas:</h2>");
persona1.mostrarGeneracion();
persona2.mostrarGeneracion();
