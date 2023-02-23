//  Cree una función en JavaScript para verificar si el usuario tiene LocalStorage habilitado en su navegador.
function verificarLocalStorage() {
  if (typeof Storage !== "undefined") {
    if (localStorage.length > 0) {
      return true; // El localStorage contiene datos
    } else {
      return false; // El localStorage está vacío
    }
  } else {
    return false; // El navegador no admite localStorage
  }
}

//Cree una función para redireccionar al usuario si no tiene LocalStorage habilitado.

function redireccionarSinLocalStorage() {
  window.location.replace("http://127.0.0.1:5500/views/login.html");
}
