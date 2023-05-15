let campoDeBusqueda = document.getElementById("campoDeBusqueda");
let resultadosDeBusqueda = document.getElementById("resultadosDeBusqueda");

let formularioBusqueda = document.getElementById("formularioBusqueda");//traer
  //detener recarga e prevent y traer dato del usuario
formularioBusqueda.addEventListener("submit", (e) => {
    e.preventDefault();
    buscarArticulo();
    formularioBusqueda.reset();
  });
  