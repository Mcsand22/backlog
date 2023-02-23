let campoMail = document.querySelector("#mailLogIn");

let formularioLogIn = document.querySelector("#logIn");

let password = document.querySelector("#passwordLogIn");

let warningMail = document.querySelector("#warningMail");

let warningPassword = document.querySelector("#warningPassword");

let warningValidation = document.querySelector("#warningValidation");

campoMail.addEventListener("focus", function () {
  warningMail.innerHTML = "* Debes ingresar un mail válido";
  warningMail.style.display = "unset";
});

campoMail.addEventListener("change", function () {
  warningMail.style.display = "none";
});

campoMail.addEventListener("blur", function () {
  if (!campoMail.value.length) {
    warningMail.style.display = "unset";
    warningMail.innerHTML = "* Este campo debe estar completo";
  }
});

password.addEventListener("focus", function () {
  warningPassword.innerHTML =
    "* Tu contraseña debe tener al menos 8 caracteres";
  warningPassword.style.display = "unset";
});

password.addEventListener("change", function () {
  warningPassword.style.display = "none";
});

password.addEventListener("blur", function () {
  if (!password.value.length) {
    warningPassword.style.display = "unset";
    warningPassword.innerHTML = "* Este campo debe estar completo";
  }
});

formularioLogIn.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!validateEmail(campoMail.value)) {
    warningMail.innerHTML = "* Debes ingresar un mail válido";
    warningMail.style.display = "unset";
  } else if (password.value.length < 8) {
    warningPassword.innerHTML =
      "* Debes ingresar una contraseña y debe ser mayor a 8 caracteres";
    warningPassword.style.display = "unset";
  }

  fetch("http://localhost:8080/apirest-1.0-SNAPSHOT/api/usuarios")
    .then((res) => res.json())
    .then((json) => {
      json.map((data) => {
        console.log(data);
        if (
          data.mailUsuario == campoMail.value &&
          data.contraseniaUsuario == password.value
        ) {
          localStorage.setItem("email", campoMail.value);
          localStorage.setItem("id", data.idusuarios);
          localStorage.setItem("nombre", data.nombreUsuario);
          localStorage.setItem("apellido", data.apellidoUsuario);
          localStorage.setItem("contraseña", data.contraseniaUsuario);
          console.log("log in valido");
          function obtenerUsuarioLogueado() {
            let usuarioLogueado = localStorage.getItem("id");
            if (usuarioLogueado) {
              return JSON.parse(usuarioLogueado);
            } else {
              return null;
            }
          }
          console.log("paso la funcion");
          window.location.href = "http://127.0.0.1:5500/views/home.html";
        } else {
          warningValidation.innerHTML =
            "* Los datos ingresados son incorrectos";
        }
      });
    });
});

// funcion para validar mail

function validateEmail(input) {
  if (input.includes("@")) {
    if (input.slice(-4) == ".com") return true;
  }
  return false;
}
