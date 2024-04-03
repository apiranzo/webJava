const formproducto = document.querySelector("#formregistros");
const listproductos = fetch("json/productos.json");

console.log(listproductos);

class Producto{
    constructor(id, nombre, precio,stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get id(){
        return this.id;
    }
    set id(id){
        if(typeof id !== "number"){
            console.error("El id debe ser un numero");
            return;
        }
        this.id = id;
    }
    get nombre(){
        return this.nombre;
    }
    set nombre(nombre){
        if(typeof nombre !== "string"){
            console.error("El nombre debe ser una cadena de texto");
            return;
        }
        this.nombre = nombre;
    }
    get precio(){
        return this.precio;
    }
    set precio(precio){
        if(typeof precio !== "number"){
            console.error("El precio debe ser un numero");
            return;
        }
        this.precio = precio;
    }
    get stock(){
        return this.stock;
    }
    set stock(stock){
        if(typeof stock !== "number"){
            console.error("El stock debe ser un numero");
            return;
        }
        this.stock = stock;
    }

}

const nombre = document.querySelector("#nombre");
const precio = document.querySelector("#precio");
const stock = document.querySelector("#stock");

const p1 = new Producto(id, nombre, precio, stock);

console.log(p1);

formproducto.addEventListener("submit", e=>{
    let waring = "";

    if(nombre.value == ""){
        waring += "El nombre es requerido \n";
    }
    if(precio.value == ""){
        waring += "El precio es requerido \n";
    }
    if(stock.value == ""){
        waring += "El stock es requerido \n";
    }
    if(waring != ""){
        alert(waring);
        e.preventDefault();
        return;
    }
}
)