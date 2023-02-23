// cerrar sesión

let logout = document.querySelector("#logout");
console.log(logout);

function cerrarSesion() {
  localStorage.removeItem("id");
  localStorage.removeItem("email");
  localStorage.removeItem("nombre");
  localStorage.removeItem("apellido");
  localStorage.removeItem("contraseña");
}

logout.addEventListener("click", function () {
  console.log("clickeando");
  cerrarSesion();
  window.location.href = "http://127.0.0.1:5500/index.html";
});
