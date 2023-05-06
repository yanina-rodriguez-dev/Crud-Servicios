const usuarioAdmin = "administrador",
  contraseñaAdmin = "administrador",
  inputUsuario = document.getElementById("inputUsuario"),
  inputContraseña = document.getElementById("inputContraseña"),
  btnIniciarSesion = document.getElementById("btnIniciarSesion"),
  formLogin = document.getElementById("formLogin");

  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
  })