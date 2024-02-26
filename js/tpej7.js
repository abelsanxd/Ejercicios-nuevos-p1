class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  equals(contacto) {
    return this.nombre === contacto.nombre;
  }
}

class Agenda {
  constructor(tamanio = 10) {
    this.contactos = [];
    this.tamanio = tamanio;
  }

  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      console.log("La agenda está llena, no se pueden añadir más contactos.");
      return;
    }
    if (this.existeContacto(contacto)) {
      console.log("El contacto ya existe en la agenda.");
      return;
    }
    this.contactos.push(contacto);
    console.log("Contacto añadido correctamente.");
  }

  existeContacto(contacto) {
    return this.contactos.some((c) => c.equals(contacto));
  }

  listarContactos() {
    console.log("Lista de contactos:");
    this.contactos.forEach((contacto) =>
      console.log(contacto.nombre, contacto.telefono)
    );
  }

  buscarContacto(nombre) {
    const contacto = this.contactos.find((c) => c.nombre === nombre);
    if (contacto) {
      console.log(`Teléfono de ${nombre}: ${contacto.telefono}`);
    } else {
      console.log("Contacto no encontrado.");
    }
  }

  eliminarContacto(contacto) {
    const index = this.contactos.findIndex((c) => c.equals(contacto));
    if (index !== -1) {
      this.contactos.splice(index, 1);
      console.log("Contacto eliminado correctamente.");
    } else {
      console.log("Contacto no encontrado.");
    }
  }

  agendaLlena() {
    return this.contactos.length >= this.tamanio;
  }

  huecosLibres() {
    return this.tamanio - this.contactos.length;
  }
}

function mostrarMenu() {
  console.log("1. Añadir contacto");
  console.log("2. Buscar contacto");
  console.log("3. Eliminar contacto");
  console.log("4. Listar contactos");
  console.log("5. Salir");
}

const agenda = new Agenda();

let opcion;
do {
  mostrarMenu();
  opcion = parseInt(prompt("Seleccione una opción:"));

  switch (opcion) {
    case 1:
      const nombre = prompt("Introduce el nombre del contacto:");
      const telefono = prompt("Introduce el teléfono del contacto:");
      agenda.aniadirContacto(new Contacto(nombre, telefono));
    case 2:
      const nombreBuscar = prompt("Introduce el nombre del contacto a buscar:");
      agenda.buscarContacto(nombreBuscar);
    case 3:
      const nombreEliminar = prompt(
        "Introduce el nombre del contacto a eliminar:"
      );
      agenda.eliminarContacto(new Contacto(nombreEliminar));
    case 4:
      agenda.listarContactos();
    case 5:
      console.log("Saliendo...");
    default:
      console.log(
        "Opción no válida. Por favor, seleccione una opción del 1 al 5."
      );
  }
} while (opcion !== 5);
