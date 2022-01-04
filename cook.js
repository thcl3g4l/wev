/* ésto comprueba la localStorage si ya tiene la variable guardada */
function comprAcptCook() {
  if(localStorage.acptCook == 'true'){
    cajcook.style.display = 'none';
  }
 }

/* aquí guardamos la variable de que se ha
aceptado el uso de cookies así no mostraremos
el mensaje de nuevo */
function acptCook() {
  localStorage.acptCook = 'true';
  cajcook.style.display = 'none';
}

/* ésto se ejecuta cuando la web está cargada */
$(document).ready(function () {
  comprAcptCook();
});
