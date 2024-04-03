let registros = [
    { id: 1, nombre: 'Producto 3', precio: 12.4, stock: 10 },
    { id: 2, nombre: 'Producto 2', precio: 12.4, stock: 5 },
    { id: 3, nombre: 'Producto 1', precio: 12.4, stock: 3 },
];

// Variables globales
let tbody, form, table, card;

/* DOM */
window.addEventListener('DOMContentLoaded', function () {
    
    // Variables documento formulario
    form = document.querySelector('#formregistros');
    table = document.querySelector('#tregistros');
    tbody = document.querySelector('#tregistrosbody');
    card = document.querySelector('#cregistro');

    // Botón 'submit' del form
    form.addEventListener('submit', function(e) {
        // Cancelar evento por defecto
        e.preventDefault();

        // Constante de registro
        const registro = {nombre: form.nombre.value,
                    precio: form.precio.value,
                    stock: form.stock.value};
        
        // Comprobar si el registro existe
        if (form.id.value){
            registro.id = +form.id.value;

            console.log(registro);

            // Comprobar si el id del registro coincide con alguno de los ya existentes
            registros = registros.filter(r => r.id !== registro.id);
            registros.push(registro);
        } else {
            // Añadir el nuevo registro buscando el id máximo de los registros
            registro.id = registros.length ? Math.max(...registros.map(r => r.id)) + 1 : 1;
            
            registros.push(registro);
        }

        listado();
        
    });

    listado();

    card.style.height= "0px";
});

// FUNCIONES externas a la DOM - Listar Registros
function listado(){
    card.innerHTML = '';
    table.style.display = null;
    card.style.height = '0px';

    tbody.innerHTML = '';

    // Función por cada uno de los registros
    registros.forEach(r => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<th class="align-middle" scope="row">${r.id}</th>
                        <td class="align-middle">${r.nombre}</td>
                        <td class="align-middle">${r.precio}&euro;</td>
                        <td class="align-middle">${r.stock}</td>

                        <td>
                            <a class="btn btn-primary m-1" href="javascript:formulario(${r.id})">Editar</a>
                            <a class="btn btn-personal btn-primary m-1" href="javascript:seleccionar(${r.id})">Select</a>
                            <a class="btn btn-danger m-1" href="javascript:borrar(${r.id})">Borrar</a>
                            </td>`;

        tbody.appendChild(tr);
    });
}

// Borrar registros
function borrar(id){
    // Filtramos el array de registros devolver aquellos registros con id distinto
    registros = registros.filter(r => r.id !== id);


    listado();

}

// Seleccionar registros
function seleccionar(id){
    // Limpiamos el html de card para que no se dupliquen los datos
    card.innerHTML = '';

    table.style.display = 'none';
    card.style.height = 'auto';

    

    // Filtramos el array de registros devolver aquellos registros con id igual
    rec = registros.filter(r => r.id === id);

    const cbody = document.createElement('div');
    cbody.class = 'card w-50 align-items-center justify-content-center';
    cbody.style = 'width: 18rem';
    cbody.innerHTML = `
                    <img src="https://picsum.photos/200/100?random=1" class="card-img-top" alt="Lorem photo">
                    <div class="card-body m-2">
                        <h5 class="card-title">${rec[0].nombre}</h5>
                        <p class="card-text">${rec[0].precio}&euro;</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary blockquote-footer">Stock: ${rec[0].stock}</small>
                        </div>
                    <div class="d-flex col justify-content-center m-1">
                        <a class="btn btn-personal btn-primary m-1" href="javascript:listado()">Listado</a>
                        <a class="btn btn-personal btn-primary m-1" href="javascript:formulario(${rec[0].id})"> Modificar </a>
                    </div>
                      
    `;

    card.appendChild(cbody);
    
}

// Crear y modificar registros
function formulario(id) {

    //La función ha recibido algun id por parametro?
    if(id){
        // Busca dentro de los registros aquellos que coincidan con id
        const r = registros.find(r => r.id === id);

        // Rellena los campos del formulario con los existentes
        form.id.value = r.id;
        form.nombre.value = r.nombre;
        form.precio.value = r.precio;
        form.stock.value = r.stock;
    } else{
        // Borra los campos del formulario 
        form.reset();
    }
}