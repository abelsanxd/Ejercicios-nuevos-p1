let proyectos = [];
let estados = [];

function agregarProyecto(nombreProyecto, estadoProyecto = "En curso") {
  proyectos.push(nombreProyecto);
  estados.push(estadoProyecto);
}

function cambiarEstado(nombreProyecto, nuevoEstado) {
  const index = proyectos.indexOf(nombreProyecto);
  if (index !== -1) {
    estados[index] = nuevoEstado;
    document.write(
      `<p>El estado del proyecto "${nombreProyecto}" se ha actualizado a "${nuevoEstado}".</p>`
    );
  } else {
    document.write(`<p>El proyecto "${nombreProyecto}" no se encontró.</p>`);
  }
}

function asignarResponsable(nombreProyecto, responsable) {
  const index = proyectos.indexOf(nombreProyecto);
  if (index !== -1) {
    document.write(
      `<p>Se ha asignado a "${responsable}" como responsable del proyecto "${nombreProyecto}".</p>`
    );
  } else {
    document.write(`<p>El proyecto "${nombreProyecto}" no se encontró.</p>`);
  }
}

function resumenProyectosEnCurso() {
  document.write("<h2>Resumen de proyectos en curso:</h2>");
  for (let i = 0; i < proyectos.length; i++) {
    if (estados[i] === "En curso") {
      document.write(`<p>${proyectos[i]}</p>`);
    }
  }
}

agregarProyecto("Proyecto A");
agregarProyecto("Proyecto B");
cambiarEstado("Proyecto B", "Completado");
agregarProyecto("Proyecto C");
asignarResponsable("Proyecto C", "Juan");
resumenProyectosEnCurso();
