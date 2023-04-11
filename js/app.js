var numero_aleatorio = null;

// BOTON INICIAR JUEGO
var boton_iniciar_juego = document.getElementById("boton-iniciar-juego");
var boton_enviar_numero = document.getElementById("boton-enviar-num");

function toogleFormulario() {
  var formulario = document.getElementById("formulario_juego");
  formulario.style.visibility =
    formulario.style.visibility === "hidden" ? "visible" : "hidden";

  numero_aleatorio = Math.floor(Math.random() * 100 + 1);
}

// BOTON ENVIAR NUMERO

function enviar_numero() {
  boton_iniciar_juego.disabled = true;
  var numero = document.getElementById("input-numero").value;

  if (numero_aleatorio > numero) {
    alert("¡Perdiste! El número mágico es más grande.");
  } else if (numero_aleatorio < numero) {
    alert("¡Perdiste! El número mágico es más chico.");
  } else {
    fireworks();
    notificacion_juego("¡Ganaste!");
  }
}

//////////////////////////////////////////

function notificacion_juego(message) {
  var alertBox = document.createElement("div");
  alertBox.classList.add("my-alert-box");
  alertBox.textContent = message;
  document.body.appendChild(alertBox);
}

function fireworks() {
  var fireworks = document.createElement("div");
  fireworks.classList.add("fireworks");
  document.body.appendChild(fireworks);

  for (var i = 0; i < 20; i++) {
    var spark = document.createElement("div");
    spark.classList.add("spark");
    spark.style.left = Math.random() * 100 + "%";
    spark.style.top = Math.random() * 100 + "%";
    fireworks.appendChild(spark);
  }

  setTimeout(function () {
    fireworks.remove();
  }, 1000);
}
