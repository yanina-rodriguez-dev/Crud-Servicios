const usuarioAdmin = "administrador",
  passwordAdmin = "administrador",
  inputUsuario = document.getElementById("inputUsuario"),
  inputPassword = document.getElementById("inputPassword"),
  btnIniciarSesion = document.getElementById("btnIniciarSesion"),
  formLogin = document.getElementById("formLogin");
 let sesionIniciada = false;
 let datosEnLocalStorage = localStorage.getItem("sesionIniciada") || [];

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
    Swal.fire({
      title: "Los campos son obligatorios y no pueden estar vacios.",
      icon: "error",
      background: "#121f4b",
      color: "#fff",
      iconColor: "#813dd8",
      confirmButtonColor: "#813dd8",
    });
  }
  limpiarFormulario();
}

function iniciarSesion(usuarioIngresado, passwordIngresada) {
  if (
    usuarioIngresado === usuarioAdmin &&
    passwordIngresada === passwordAdmin
  ) {
    Swal.fire({
      title: "Administrador logueado",
      icon: "success",
      background: "#121f4b",
      color: "#fff",
      iconColor: "#813dd8",
      confirmButtonColor: "#813dd8",
    });
    sesionIniciada = true;
    localStorage.setItem("sesionIniciada", sesionIniciada)
    window.location.href = window.origin+"/pages/administrador.html"
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

function verificarSesionIniciada(){
  if (datosEnLocalStorage.length > 0) {
    let contenedorLogin = document.getElementById("contenedorLogin")
    contenedorLogin.innerHTML = `<h1>La sesión ya se encuentra iniciada. Vamos a redirigirte al panel de administrador...</h1>`
    setTimeout(() => {
      window.location.href = window.origin + "/pages/administrador.html";
    }, 5000);
  }
}

verificarSesionIniciada()



