const usuarioAdmin = "administrador",
  passwordAdmin = "administrador",
  inputUsuario = document.getElementById("inputUsuario"),
  inputPassword = document.getElementById("inputPassword"),
  btnIniciarSesion = document.getElementById("btnIniciarSesion"),
  formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  validarDatos();
});

function validarDatos() {
  let usuarioIngresado = inputUsuario.value.trim(),
    passwordIngresada = inputPassword.value.trim();
  if (usuarioIngresado !== "" && passwordIngresada !== "") {
    iniciarSesion(usuarioIngresado, passwordIngresada);
  }
  if (usuarioIngresado === "" || passwordIngresada === "") {
    console.log("Los campos son obligatorios y no pueden estar vacios.");
  }
  limpiarFormulario();
  inputPassword.blur();
}

function iniciarSesion(usuarioIngresado, passwordIngresada) {
  if (
    usuarioIngresado === usuarioAdmin &&
    passwordIngresada === passwordAdmin
  ) {
    console.log("Administrador logueado.");
  } else {
    console.log("Usuario o contraseña incorrectos.");
  }
}

function limpiarFormulario() {
  formLogin.reset();
}
