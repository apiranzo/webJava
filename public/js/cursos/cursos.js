'use strict';

const URL = 'http://localhost:3000/curso/';

let form, table, tbody, resumen;

window.addEventListener('DOMContentLoaded', domCargado);

function domCargado() {
    form = document.querySelector('#fcursos');
    table = document.querySelector('#tcursos');
    tbody = document.querySelector('#tbcursos');
    resumen = document.querySelector('#resumen');

    
    form.addEventListener('submit', guardar);

    listado();

}

async function guardar(e) {
    e.preventDefault();

    const alumno = {
        nombre: form.nombre.value,
        asistencia: form.asistencia.value,
        nota: +form.nota.value
    }

    if (form.id.value) {
        alumno.id = +form.id.value;

        await fetch(URL + alumno.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alumno)
        });
    } else {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alumno)
        });
    }

    listado();
}
async function listado() {
    form.style.display = 'none';
    table.style.display = null;

    const respuesta = await fetch(URL);
    const alumnos = await respuesta.json();

    console.table(alumnos);

    tbody.innerHTML = '';

    alumnos.forEach(a => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<th>${a.id}</th><td>${a.nombre}</td><td>${a.asistencia}</td><td>${a.nota}</td>
            <td>
                <a href="javascript:formulario(${a.id})">Editar</a>
                <a href="javascript:borrar(${a.id})">Borrar</a>
            </td>`;

        tbody.appendChild(tr);
    });

    const ul = document.createElement('ul');

    let asistidos =  alumnos.filter(a => a.asistencia == 1).length;
    let noasistidos =  alumnos.filter(a => a.asistencia == 0).length;

    let total = alumnos.length; 

    ul.innerHTML = `
            <li>Total alumnos: ${alumnos.length}</li>
            <li>Cantidad de alumnos asistidos: ${asistidos}</li> 
            <li>Porcentaje asistidos: ${((asistidos / total) * 100).toFixed(2)}</li> 
            <li>Cantidad de alumnos asistidos: ${noasistidos}</li> 
            <li>Porcentaje NO asistidos: ${((noasistidos / total) * 100).toFixed(2)}</li> 

    `;

    resumen.appendChild(ul);    
}

async function formulario(id) {
    form.style.display = null;
    table.style.display = 'none';

    if (id) {
        const respuesta = await fetch(URL + id);
        const a = await respuesta.json();

        form.id.value = a.id;
        form.nombre.value = a.nombre;
        form.asistencia.value = a.asistencia;
        form.nota.value = a.nota;
    } else {
        form.reset();
    }

    
}

function borrar(id) {
    fetch(URL + id, { method: 'DELETE' }).then(listado);
}


