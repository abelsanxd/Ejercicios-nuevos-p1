const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (cantidad) {
    this.saldo += cantidad;
    document.write(`Se ingresaron ${cantidad} dinero a la cuenta.<br>`);
  },

  extraer: function (cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
      document.write(`Se extrajeron ${cantidad} de la cuenta.<br>`);
    } else {
      document.write("Saldo insuficiente.<br>");
    }
  },

  informar: function () {
    document.write(`Titular: ${this.titular}<br>`);
    document.write(`Saldo actual: ${this.saldo}<br>`);
  },
};

document.write(`<h3>Descripción inicial de la cuenta:</h3>`);
cuenta.informar();

document.write(`<h3>Ingresar dinero:</h3>`);
cuenta.ingresar(100);

document.write(`<h3>Extraer dinero:</h3>`);
cuenta.extraer(50);

document.write(`<h3>Descripción actualizada de la cuenta:</h3>`);
cuenta.informar();
