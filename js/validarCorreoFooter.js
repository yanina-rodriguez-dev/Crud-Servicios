let input_correo_suscribirse = document.getElementById("input_correo_suscribirse");
let boton_suscribirse = document.getElementById("boton_suscribirse");
let formSuscribirse = document.getElementById("formSuscripcion");
const patronValidarCorreo = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

formSuscribirse.addEventListener("submit", (e) => {
  e.preventDefault();
  validarCorreo();
});

function validarCorreo(){
    let valueInputCorreo = input_correo_suscribirse.value;
    if(patronValidarCorreo.test(valueInputCorreo)){
      window.location.href = window.origin + "/pages/error404.html";
    }else{
    Swal.fire({
      title: "Los campos son obligatorios y no pueden estar vacios.",
      icon: "error",
      background: "#121f4b",
      color: "#fff",
      iconColor: "#813dd8",
      confirmButtonColor: "#813dd8",
    });
    }
}