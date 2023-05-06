const usuarioAdmin = "administrador",
  contraseñaAdmin = "administrador",
  inputUsuario = document.getElementById("inputUsuario"),
  inputContraseña = document.getElementById("inputContraseña"),
  btnIniciarSesion = document.getElementById("btnIniciarSesion"),
  formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  validarDatos();
  formLogin.reset();
  inputContraseña.blur();
});

function validarDatos() {
  let usuarioIngresado = inputUsuario.value.trim();
  let contraseñaIngresada = inputContraseña.value.trim();
  let esTexto = /^[a-zA-Z]+$/;
  if (
    esTexto.test(usuarioIngresado) &&
    esTexto.test(contraseñaIngresada) &&
    usuarioIngresado !== "" &&
    contraseñaIngresada !== ""
  ) {
    if (
      usuarioIngresado === usuarioAdmin &&
      contraseñaIngresada === contraseñaAdmin
    ) {
      console.log("Administrador logueado.");
    } else {
      if (
        usuarioIngresado !== usuarioAdmin &&
        contraseñaIngresada === contraseñaAdmin
      ) {
        console.log("El usuario ingresado es incorrecto.");
      } else if (
        usuarioIngresado === usuarioAdmin &&
        contraseñaIngresada !== contraseñaAdmin
      ) {
        console.log("La contraseña ingresada es incorrecta.");
      } else {
      console.log("Usuario invalido.");
      }
    }
  } else {
    console.log("Los datos ingresados son erroneos");
  }
}
