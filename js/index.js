let listaPaquetes = JSON.parse(localStorage.getItem('listaPaquetes')) || [];

listaPaquetes.map((paquete) =>{
    crearColumna(paquete);
});

function crearColumna(paquete){
    let containerPaquete = document.getElementById('paquetes').children[1];
    containerPaquete.innerHTML += `
    <div class="card m-2 col-lg-3 col-md-5 col-12 ocultarElementos articulo">
        <img src="./img/parejaenlaPLAYA.jpg" class="card-img-top pt-2" alt="pareja en la playa" />
        <div class="card-body">
            <h5 class="card-title">${paquete.nombre}</h5>
            <p class="card-text">
                ${paquete.descripcion}
            </p>
            <p class="dias">7 DIAS</p>
            <div class="d-flex justify-content-around">
                <button class="btn btn-primary" onclick="navegarPaginaDetalle('${paquete.codigo}')">
                    Ver Detalle
                </button>
                <button class="btn btn-outline-light precio">$ ${paquete.precio}</button>
            </div>
        </div>
    </div>
    `
}

function navegarPaginaDetalle(codigo){
    window.location.href = window.location.origin + '/pages/detalle.html?codigo=' + codigo;
}
