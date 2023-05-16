export default class Paquete{
    #codigo;
    #nombre;
    #precio;
    #categoria;
    #imagen;
    #descripcion;
    #dias;
    constructor(codigo = uuidv4(),nombre,precio,categoria,imagen,descripcion,dias){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
        this.#categoria = categoria;
        this.#imagen = imagen;
        this.#descripcion = descripcion;
        this.#dias = dias;
    }
    get codigo(){
        return this.#codigo;
    }
    set codigo(codigo){
        this.#codigo = codigo;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        this.#nombre = nombre;
    }
    get precio(){
        return this.#precio;
    }
    set precio(precio){
        this.#precio = precio;
    }
    get categoria(){
        return this.#categoria;
    }
    set categoria(categoria){
        this.#categoria = categoria;
    }
    get imagen(){
        return this.#imagen;
    }
    set imagen(imagen){
        this.#imagen = imagen;
    }
    get descripcion(){
        return this.#descripcion;
    }
    set descripcion(descripcion){
        this.#descripcion = descripcion;
    }
    get dias(){
        return this.#dias;
    }
    set dias(dias){
        this.#dias = dias;
    }
    toJSON(){
        return{
            codigo : this.codigo,
            nombre : this.nombre,
            precio : this.precio,
            categoria : this.categoria,
            imagen : this.imagen,
            descripcion : this.descripcion,
            dias : this.dias,
        }
    }
}