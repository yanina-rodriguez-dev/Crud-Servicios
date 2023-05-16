let campoDeBusqueda = document.getElementById("campoDeBusqueda");
let resultadosDeBusqueda = document.getElementById("resultadosDeBusqueda");

let formularioBusqueda = document.getElementById("formularioBusqueda");//traer
  //detener recarga e prevent y traer dato del usuario
formularioBusqueda.addEventListener("submit", (e) => {
    e.preventDefault();
    buscarArticulo();
    formularioBusqueda.reset();
  });
  function buscarArticulo() {
    let textoBuscado = campoDeBusqueda.value.trim();
    textoBuscado = textoBuscado.toLowerCase();
    let articulos = document.getElementsByClassName("articulo");
  
    let articuloEncontrado;
    
      //desaparecer lo que no coincida
  
    for (let i = 0; i < articulos.length; i++) {
      let articuloRecorrido = articulos[i].innerHTML.toLowerCase().includes(textoBuscado);
      if (articuloRecorrido === true) {
        articuloEncontrado = articulos[i];
        
        articuloEncontrado.style.display = "flex";
      } else {
        articulos[i].style.display = "none";
  
      }
    } 
    if (!articuloEncontrado){
      let mensaje = document.getElementById("sincoincidencias");
      mensaje.className = 'fs-1 text-center my-5';
      
    }
    if (!articuloEncontrado){
      
    }
   
  }