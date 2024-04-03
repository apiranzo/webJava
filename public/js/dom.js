'use strict';
/*Conjunto de objectos guardados en javaScript */
let productos = [
    { id: 1, nombre: 'Producto 3', precio: 12.4 },
    { id: 2, nombre: 'Producto 2', precio: 12.4 },
    { id: 3, nombre: 'Producto 1', precio: 12.4 },
];

// Let de variables para dejarlas a nivel global
let tbody, form, table;


/* Cargar el documento completo de DOM */
window.addEventListener('DOMContentLoaded', function() {
    //selecciona un elemento por su id o por su selector de elemento
    const h1 = document.querySelector('#ejemplo1');

    //selecciona todos los elementos por su clase
    const p = document.querySelectorAll('.card-text'); 

    console.log(h1);
    console.log(p);

    //Lectura interna del contenido de los elementos
    console.log(h1.innerHTML);
    console.log(p.innerHTML);

    //Modificar elementos de pantalla
    h1.innerText = 'Ya no soy un ejemplo';


    //Ejemplo 2
    const inputNombre = document.querySelector('#nombre');
    const botonSaludar = document.querySelector('#saludar');
    const spanSaludo = document.querySelector('#saludo');
    const cardFooter = document.querySelector('#respuesta');

    botonSaludar.addEventListener('click', function() {
        spanSaludo.innerText = 'Hola ' + inputNombre.value;

        // Si ya se ha creado no se vuelve a crear sino pasa
        
        document.querySelector('#respuesta') || cardFooter.appendChild(spanRespuesta);
            const spanRespuesta = document.createElement('small');
            spanRespuesta.innerText = ('Adiós ' + inputNombre.value);
            spanRespuesta.className = 'text-body-secondary';
            cardFooter.appendChild(spanRespuesta);
        
    });

    // Ejemplo 3
    form = document.querySelector('#formulario');
    table = document.querySelector('#tabla');
    tbody = document.querySelector('#tablabody');

    // Display de elementos en la web
    form.style.display = 'none';

    // Botón guardar - evento mandar datos
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const producto = { nombre: form.nombre.value, precio: form.precio.value };

        if(form.id.value) {
            producto.id = +form.id.value;

            console.log(producto);

            productos = productos.filter(p => p.id !== producto.id);
            productos.push(producto);
        } else {
            producto.id = productos.length ? Math.max(...productos.map(p => p.id)) + 1 : 1;

            productos.push(producto);
        }

        listado();
    });

    listado();


});


// Funciones fuera de la DOM
function listado() {
    tbody.innerHTML = '';
    // Función por cada uno de los productos
    productos.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<th>${p.id}</th><td>${p.nombre}</td><td>${p.precio}</td>
            <td>
                <a href="javascript:formulario(${p.id})">Editar</a>
                <a href="javascript:borrar(${p.id})">Borrar</a>
            </td>`;

        tbody.appendChild(tr);
    });

    form.style.display = 'none';
    table.style.display = null;
}
function formulario(id) {

    if(id) {
        const p = productos.find(p => p.id === id);

        form.id.value = p.id;
        form.nombre.value = p.nombre;
        form.precio.value = p.precio;
    } else {
        form.reset();
    }

    form.style.display = null;
    table.style.display = 'none';


}
function borrar(id) {
    /*Filtramos el array para guardar los productos que no tengan el id */
    productos = productos.filter(p => p.id !== id);

    listado();

}