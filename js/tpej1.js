const auto = {
  color: "rojo",
  marca: "Toyota",
  modelo: "Corolla",
  encendido: false,

  encender: function () {
    if (!this.encendido) {
      this.encendido = true;
      document.write("Auto encendido<br>");
    } else {
      document.write("El auto ya está encendido<br>");
    }
  },

  apagar: function () {
    if (this.encendido) {
      this.encendido = false;
      document.write("El auto se apagó<br>");
    } else {
      document.write("El auto ya está apagado<br>");
    }
  },
};

auto.encender();
auto.apagar();
