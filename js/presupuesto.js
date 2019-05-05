var acc = document.getElementsByClassName("acordeon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Cambiando, haciendo click entre clase activa y no, de manera que
    se pueda controlar el boton para abrir y cerrar el panel */
    this.classList.toggle("activo");

    /* Cambiar entre esconder y mostrar los paneles del acordeon */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
