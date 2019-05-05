// Obtener modal
var modal = document.getElementById('miModal');

// Obtener el boton que abre el modal
var btn = document.getElementById("BotonCalculadora");

// Obtener el <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando se clickea ek boton, se abre el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando se clickea en  <span> (x), se cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

//Si se clickea en cualquier lugar fuera del modal,éste se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
