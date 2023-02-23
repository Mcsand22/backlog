const botonRegistrar = document.querySelector("#registrar");

let warningNameRegister = document.querySelector("#warningNameRegister");
let warningLastNameRegister = document.querySelector(
  "#warningLastNameRegister"
);
let warningMailRegister = document.querySelector("#warningMailRegister");
let warningPasswordRegister = document.querySelector(
  "#warningPasswordRegister"
);

nameRegister.addEventListener("focus", function () {
  warningNameRegister.innerHTML = "* Debes ingresar tu nombre";
  warningNameRegister.style.display = "unset";
});

nameRegister.addEventListener("change", function () {
  warningNameRegister.style.display = "none";
});

nameRegister.addEventListener("blur", function () {
  warningNameRegister.style.display = "none";
  warningNameRegister.innerHTML = "* Este campo debe estar completo";
});

lastnameRegister.addEventListener("focus", function () {
  warningLastNameRegister.innerHTML = "* Debes ingresar tu apellido";
  warningLastNameRegister.style.display = "unset";
});

lastnameRegister.addEventListener("change", function () {
  warningLastNameRegister.style.display = "none";
});

lastnameRegister.addEventListener("blur", function () {
  warningLastNameRegister.style.display = "none";
  warningLastNameRegister.innerHTML = "* Este campo debe estar completo";
});

emailRegister.addEventListener("focus", function () {
  warningMailRegister.innerHTML = "* Debes ingresar un mail válido";
  warningMailRegister.style.display = "unset";
});

emailRegister.addEventListener("change", function () {
  warningMailRegister.style.display = "none";
});

emailRegister.addEventListener("blur", function () {
  warningMailRegister.style.display = "none";
  warningMailRegister.innerHTML = "* Este campo debe estar completo";
});

passwordRegister.addEventListener("focus", function () {
  warningPasswordRegister.innerHTML =
    "* Tu contraseña debe tener al menos 8 caracteres";
  warningPasswordRegister.style.display = "unset";
});

passwordRegister.addEventListener("change", function () {
  warningPasswordRegister.style.display = "none";
});

passwordRegister.addEventListener("blur", function () {
  warningPasswordRegister.style.display = "none";
  warningPasswordRegister.innerHTML = "* Este campo debe estar completo";
});

//Validacion submit

botonRegistrar.addEventListener("click", (event) => {
  event.preventDefault();
  const nameRegister = document.querySelector("#nameRegister").value;
  const lastnameRegister = document.querySelector("#lastnameRegister").value;
  const emailRegister = document.querySelector("#emailRegister").value;
  const passwordRegister = document.querySelector("#passwordRegister").value;

  if (nameRegister.value == "") {
    warningNameRegister.innerHTML = "* Debes ingresar tu nombre";
    event.preventDefault();
  } else if (lastnameRegister.value == "") {
    warningLastNameRegister.innerHTML = "* Debes ingresar tu apellido";
    event.preventDefault();
  } else if (!ValidateEmail(emailRegister)) {
    warningMailRegister.innerHTML = "* Debes ingresar un mail válido";
    warningMailRegister.style.display = "unset";
    event.preventDefault();
    warningMailRegister.innerHTML = "* Debes ingresar un mail válido";
    event.preventDefault();
  } else if (passwordRegister.length < 8) {
    warningPasswordRegister.innerHTML =
      "* Debes ingresar una contraseña y debe ser mayor a 8 caracteres";
    event.preventDefault();
  }

  //usuario existe y registro

  let usuarioRegistrado = true;

  fetch("http://localhost:8080/apirest-1.0-SNAPSHOT/api/usuarios")
    .then((res) => res.json())
    .then((json) => {
      json.map((data) => {
        console.log(data);
        console.log(data.mailUsuario);
        if (data.mailUsuario == emailRegister) {
          usuarioRegistrado = false;
          warningMailRegister.innerHTML +=
            "*Ya hay un usuario registrado con este mail";
        }
      });
    });

  if (!usuarioRegistrado) {
    console.log(usuarioRegistrado);
  } else {
    fetch("http://localhost:8080/apirest-1.0-SNAPSHOT/api/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombreUsuario: nameRegister,
        apellidoUsuario: lastnameRegister,
        mailUsuario: emailRegister,
        contraseniaUsuario: passwordRegister,
        imgUsuario: null,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("Registro Ok");
        console.log(data);
        location.href = "login.html";
      })
      .catch(function (error) {
        console.error(error);
      });
  }
});

// funcion para validar mail

function ValidateEmail(input) {
  if (input.includes("@")) {
    if (input.slice(-4) == ".com") return true;
  }
  return false;
}
