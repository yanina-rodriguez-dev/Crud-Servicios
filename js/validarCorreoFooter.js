let input_correo_suscribirse = document.getElementById("input_correo_suscribirse");
let boton_suscribirse = document.getElementById("botonsuscribirse");
let form = document.querySelector("#formSuscripcion");
const patronValidadCorreo = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

function validarCorreo(){
    let valueInputCorreo = input_correo_suscribirse.value;
    if(patronValidadCorreo.test(valueInputCorreo)){

    }else{
        /* Informar al usuario de que debe contener @ y . en su correo */
        let informeDeError = document.createElement("p");
        informeDeError.innerHTML = "El correo debe contener @ y .";
        informeDeError.classList.add("fs-4");
        informeDeError.classList.add("text-white");
        form.appendChild(informeDeError);
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    validarCorreo();
});