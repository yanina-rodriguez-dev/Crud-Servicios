const parametroURL = new URLSearchParams(window.location.search);

console.log(parametroURL);
console.log(parametroURL.get('codigo'));


let listaPaquetes = JSON.parse(localStorage.getItem("listaPaquetes")) || [];


const paqueteBuscado = listaPaquetes.find((paquete) => paquete.codigo === parametroURL.get('codigo'));

/* const paquetePrueba = {
    nombre: "Maldivas",
    precio: "1.3M",
    categoria: "Asia",
    descripcion: "Maldivas es un país tropical en el océano Índico que abarca 26 atolones con forma de anillos que se componen de más de 1,000 islas de coral. Es conocido por las playas, las lagunas azules y los extensos arrecifes. La capital, Malé, tiene un mercado de pescado ajetreado, restaurantes y tiendas en la avenida principal, Majeedhee Magu, y la mezquita del siglo XVII Hukuru Miskiy (también conocida como la Mezquita del Viernes), hecha de coral blanco tallado.",
    dias: "13"
} */

/* render detalle paquete */
let labelNombre = document.getElementById('paquete-nombre');
let labelPrecio = document.getElementById('paquete-precio');
let labelCategoria = document.getElementById('paquete-categoria');
let labelDescripcion = document.getElementById('paquete-descripcion');
let labelCodigo = document.getElementById('paquete-codigo')
/* let labelDias = document.getElementById('paquete-dias'); */

labelCategoria.innerHTML = paqueteBuscado.categoria;
labelNombre.innerHTML = paqueteBuscado.nombre;
labelDescripcion.innerHTML = paqueteBuscado.descripcion;
labelCodigo.innerHTML = paqueteBuscado.codigo;
labelPrecio.innerHTML = `${paqueteBuscado.precio} $`;

