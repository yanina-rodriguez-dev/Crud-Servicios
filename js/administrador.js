import Paquete from "./classPaquetes.js";
import { validacionesFinales } from "./helpers.js";
let formularioPaquete = document.getElementById("formPaquetes");
let modalPaquete = new bootstrap.Modal(
    document.getElementById("modalPaquetes")
);
const btnCrearPaquete = document.querySelector("#btnCrearPaquete");
let codigo = document.getElementById("codigo"),
    nombre = document.getElementById("nombre"),
    precio = document.getElementById("precio"),
    categoria = document.getElementById("categoria"),
    imagen =  document.getElementById("imagen"),
    descripcion = document.getElementById("descripcion"),
    dias = document.getElementById("dias"),
    alert = document.getElementById("alerta");
let altaPaquete = true;
let listaPaquetes = JSON.parse(localStorage.getItem("listaPaquetes")) || [];
if(listaPaquetes.length > 0){
    listaPaquetes = listaPaquetes.map(
        (paquete) => new Paquete(
            paquete.codigo,
            paquete.nombre,
            paquete.precio,
            paquete.categoria,
            paquete.imagen,
            paquete.descripcion,
            paquete.dias
        )
    );
}
cargaInicial();
function cargaInicial(){
    if(listaPaquetes.length > 0){
        listaPaquetes.map((paquete, posicion) => 
        crearFila(paquete, posicion+1)
        );
    }
}
function crearFila(paquete, fila){
    let tablaPaquete = document.getElementById("tablaPaquete");
    tablaPaquete.innerHTML += `
    <tr>
        <th scope="row">${fila}</th>
        <td>${paquete.codigo}</td>
        <td><span class="my-class text-truncate">${paquete.nombre}</span></td>
        <td>${paquete.precio}</td>
        <td>${paquete.categoria}</td>
        <td><span class="my-class text-truncate">${paquete.imagen}</span></td>
        <td><span class="my-class text-truncate">${paquete.descripcion}</span></td>
        <td>${paquete.dias}</td>
        <td>
            <button class="btn btn-warning" onclick="prepararPaquete('${paquete.codigo}')">
                <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-danger" onclick="borrarPaquete('${paquete.codigo}')">
                <i class="bi bi-trash"></i>
            </button>
        </td>
    </tr>
    `;
}
formularioPaquete.addEventListener("submit",prepararFormularioPaquete);
btnCrearPaquete.addEventListener("click",desplegarModalPaquete);
function prepararFormularioPaquete(e){
    e.preventDefault();
    if(altaPaquete){
        crearPaquete();
    }else{
        editarPaquete();
    }
}
function desplegarModalPaquete(){
    limpiarFormulario();
    altaPaquete = true;
    modalPaquete.show();
}
function limpiarFormulario(){
    formularioPaquete.reset();
}
function crearPaquete(){
    const resumen = validacionesFinales(
        nombre.value,
        precio.value,
        categoria.value,
        imagen.value,
        descripcion.value,
        dias.value
    );
    mostrarMensajeError(resumen);
    if(resumen.length === 0){
        const paqueteNuevo = new Paquete(
            undefined,
            nombre.value,
            precio.value,
            categoria.value,
            imagen.value,
            descripcion.value,
            dias.value
        );
        listaPaquetes.push(paqueteNuevo);
        guardarEnLocalstorage();
        crearFila(paqueteNuevo,listaPaquetes.length);
        Swal.fire("Paquete Creado","El Paquete se Agrego Exitosamente");
        limpiarFormulario();
    }
}
function mostrarMensajeError(resumen){
    if(resumen.length > 0){
        alert.className = "alert alert-danger mt-3";
        alert.innerHTML = resumen;
    }else{
        alert.className = "alert alert-danger mt-3 d-none";
    }
}
function guardarEnLocalstorage(){
    localStorage.setItem("listaPaquetes",JSON.stringify(listaPaquetes));
}
window.prepararPaquete = (codigoPaquete) => {
    const tipoPaquete = listaPaquetes.find(
        (paquete) => paquete.codigo === codigoPaquete
    );
    codigo.value = tipoPaquete.codigo;
    nombre.value = tipoPaquete.nombre;
    precio.value = tipoPaquete.precio;
    categoria.value = tipoPaquete.categoria;
    imagen.value = tipoPaquete.imagen;
    descripcion.value = tipoPaquete.descripcion;
    dias.value = tipoPaquete.dias;
    modalPaquete.show();
    altaPaquete = false;
};