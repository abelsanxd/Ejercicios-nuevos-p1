function calcularPromedio(notas) {
  const sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return sumaNotas / notas.length;
}

function mostrarResumen(estudiantes, notas) {
  const aprobados = [];
  const reprobados = [];

  for (let i = 0; i < estudiantes.length; i++) {
    const nombre = estudiantes[i];
    const nota = notas[i];

    const promedio = calcularPromedio(nota);

    if (promedio >= 60) {
      aprobados.push(nombre);
    } else {
      reprobados.push(nombre);
    }
  }

  console.log("Estudiantes aprobados:");
  console.log(aprobados.join(", "));
  console.log("Estudiantes reprobados:");
  console.log(reprobados.join(", "));
}

const estudiantes = ["Juan", "María", "Pedro", "Luisa"];
const notas = [
  [80, 70, 90],
  [60, 55, 70],
  [40, 50, 30],
  [70, 80, 75],
];

mostrarResumen(estudiantes, notas);
