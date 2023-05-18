let datosEnLocalStorage = localStorage.getItem("sesionIniciada") || [];
let btnIniciarSesion = document.getElementById("btnIniciarSesion");
let btnCerrarSesion = document.getElementById("btnCerrarSesion");

function verificarSesionIniciada() {
  if (datosEnLocalStorage.length > 0) {
    btnIniciarSesion.classList.add("d-none");
    btnCerrarSesion.classList.remove("d-none");
    let linkAdministrador = document.getElementById("linkAdministrador");
    linkAdministrador.classList.remove("d-none");
  }
}

btnCerrarSesion.addEventListener("click", cerrarSesion);

function cerrarSesion() {
  localStorage.setItem("sesionIniciada", []);
  btnIniciarSesion.classList.remove("d-none");
  btnCerrarSesion.classList.add("d-none");
  let linkAdministrador = document.getElementById("linkAdministrador");
  linkAdministrador.classList.add("d-none");
  Swal.fire({
    title: "Has cerrado sesión exitosamente.",
    icon: "success",
    background: "#121f4b",
    color: "#fff",
    iconColor: "#813dd8",
    confirmButtonColor: "#813dd8",
  });
  window.location.href = window.origin + "/index.html";
}

verificarSesionIniciada();
