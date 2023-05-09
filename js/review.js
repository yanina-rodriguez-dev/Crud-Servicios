let formReview = document.getElementById('agregar-review');
let nombreUsuario = document.getElementById('inputNombreUsuario'),
review = document.getElementById('textAreaReview'),
estrella1 = document.getElementById('estrella-1'),
estrella2 = document.getElementById('estrella-2'),
estrella3 = document.getElementById('estrella-3'),
estrella4 = document.getElementById('estrella-4'),
estrella5 = document.getElementById('estrella-5');

let puntajeReview = "";

formReview.addEventListener('submit', addReview);
estrella1.addEventListener('click', () => getPuntuacion(1));
estrella2.addEventListener('click', () => getPuntuacion(2));
estrella3.addEventListener('click', () => getPuntuacion(3));
estrella4.addEventListener('click', () => getPuntuacion(4));
estrella5.addEventListener('click', () => getPuntuacion(5));

function getPuntuacion(puntaje){
    switch (puntaje) {
        case 1:
            puntajeReview = "1";
            break;
        case 2:
            puntajeReview = "2";
            break;
        case 3:
            puntajeReview = "3";
            break;
        case 4:
            puntajeReview = "4";
            break;
        case 5:
            puntajeReview = "5";
            break;
    
        default:
            break;
    }
}


function addReview(){
    let puntuacion = getPuntuacion();
    console.log(`hola ${nombreUsuario.value}`);
    console.log(`${review.value}`);
    console.log(`Puntuación: ${puntajeReview} estrellas`)
}