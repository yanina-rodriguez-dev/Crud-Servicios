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
}

function iniciarSesion(usuarioIngresado, passwordIngresada) {
  if (
    usuarioIngresado === usuarioAdmin &&
    passwordIngresada === passwordAdmin
  ) {
    Swal.fire({
      title: "Administrador logueado.",
      icon: "success",
      background: "#121f4b",
      color: "#fff",
      iconColor: "#813dd8",
      confirmButtonColor: "#813dd8",
    });
  } else {
    Swal.fire({
      title: "Usuario o contraseña incorrectos.",
      icon: "error",
      background: "#121f4b",
      color: "#fff",
      iconColor: "#813dd8",
      confirmButtonColor: "#813dd8",
    });
  }
}

function limpiarFormulario() {
  formLogin.reset();
}
