let campoDeBusqueda = document.getElementById("campoDeBusqueda");
let resultadosDeBusqueda = document.getElementById("resultadosDeBusqueda");
let formularioBusqueda = document.getElementById("formularioBusqueda"); 
let mensaje = document.getElementById("sincoincidencias")
//traer
//detener recarga e prevent y traer dato del usuario
formularioBusqueda.addEventListener("submit", (e) => {
  e.preventDefault();
});

campoDeBusqueda.addEventListener("keyup", (e) => {
  if (e.target.value === "") {
    let articulos = document.getElementsByClassName("articulo");
    articulos = Array.from(articulos);
    articulos.forEach((articulo) => (articulo.style.display = "flex"));
  }
});

const articulosTotales = document.querySelectorAll(".articulo");

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") e.target.value = "";
  if (e.target.matches("#campoDeBusqueda")) {
    articulosTotales.forEach((articulo) => {
      articulo.children[1].children[0].innerHTML
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
        ? ((articulo.style.display = "flex"),
          articulo.classList.remove("oculto"))
        : ((articulo.style.display = "none"),
          articulo.classList.add("oculto"));
    });
    const articulosOcultos = document.querySelectorAll(".oculto");
    articulosOcultos.length >= articulosTotales.length
      ? (mensaje.className = "fs-1 text-center text-light my-5")
      : (mensaje.className = "fs-2 d-none");
  }
});

