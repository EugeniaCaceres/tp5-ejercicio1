var numero_aleatorio = null;

// BOTON INICIAR JUEGO
var boton_iniciar_juego = document.getElementById("boton-iniciar-juego");
var boton_enviar_numero = document.getElementById("boton-enviar-num");

function toogleFormulario() {
  var formulario = document.getElementById("formulario_juego");
  formulario.style.display =
    formulario.style.display === "none" ? "block" : "none";

  numero_aleatorio = Math.floor(Math.random() * 100 + 1);
}

var exampleModal = document.getElementById("exampleModal");
var modalTitle = exampleModal.querySelector(".modal-title");
var modalBodyInput = exampleModal.querySelector(".modal-body");

// BOTON ENVIAR NUMERO

function enviar_numero() {
  boton_iniciar_juego.disabled = true;

  var numero = document.getElementById("input-numero").value;

  if (numero_aleatorio > numero) {
    modalTitle.textContent = "¡Perdiste!";
    modalBodyInput.textContent = "El número mágico es más grande que " + numero;

    // alert("¡Perdiste! El número mágico es más grande.");
  } else if (numero_aleatorio < numero) {
    modalTitle.textContent = "¡Perdiste!";
    modalBodyInput.textContent = "El número mágico es más chico que " + numero;
    // alert("¡Perdiste! El número mágico es más chico.");
  } else {
    modalTitle.textContent = "¡Ganaste!";
    modalBodyInput.textContent = "Felicidades!!";
  }
}
