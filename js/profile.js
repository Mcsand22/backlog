let nameProfile = document.querySelector("#nameProfile");
let lastnameProfile = document.querySelector("#lastnameProfile");
let mailProfile = document.querySelector("#mailProfile");
let passProfile = document.querySelector("#passProfile");

window.addEventListener("load", function () {
  nameProfile.setAttribute("value", localStorage.getItem("nombre"));
  lastnameProfile.setAttribute("value", localStorage.getItem("apellido"));
  mailProfile.setAttribute("value", localStorage.getItem("email"));
  passProfile.setAttribute("value", localStorage.getItem("contraseña"));
});
