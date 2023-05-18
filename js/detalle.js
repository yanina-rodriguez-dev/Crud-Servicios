const parametroURL = new URLSearchParams(window.location.search);

let listaPaquetes = JSON.parse(localStorage.getItem("listaPaquetes")) || [];

const paqueteBuscado = listaPaquetes.find((paquete) => paquete.codigo === parametroURL.get('codigo'));

/* render detalle paquete */
let labelDestino = document.getElementById('paquete-destino')
let labelNombre = document.getElementById('paquete-nombre');
let labelPrecio = document.getElementById('paquete-precio');
let labelCategoria = document.getElementById('paquete-categoria');
let labelDescripcion = document.getElementById('paquete-descripcion');
let labelCodigo = document.getElementById('paquete-codigo');
let fondo = document.getElementById('galeria');
/* let labelDias = document.getElementById('paquete-dias'); */

labelDestino.innerHTML = paqueteBuscado.destino;
labelCategoria.innerHTML = paqueteBuscado.categoria;
labelNombre.innerHTML = paqueteBuscado.nombre;
labelDescripcion.innerHTML = paqueteBuscado.descripcion;
labelCodigo.innerHTML = paqueteBuscado.codigo;
labelPrecio.innerHTML = `${paqueteBuscado.precio} $`;
fondo.style.backgroundImage = `url(${paqueteBuscado.imagen})`;

console.log(paqueteBuscado.imagen)