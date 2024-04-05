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
        nota: form.nota.value,
        assistencia: form.assistencia.value
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
    resumen.innerHTML = '';

    alumnos.forEach(a => {
        console.log(Boolean(a.nota));
        const tr = document.createElement('tr');
        tr.innerHTML = `<th>${a.id}</th><td>${a.nombre}</td>
                        <td>${((a.nota === "0") ? "Apte" : "No apte" )}</td>
                        <td>${((a.assistencia === "0") ? "Presentat" : "No presentat" )}</td>
            <td>
                <a class="btn btn-primary m-1" href="javascript:formulario(${a.id})">Editar</a>
                <a class="btn btn-danger m-1" href="javascript:borrar(${a.id})">Borrar</a>
            </td>`;

        tbody.appendChild(tr);
    });

    const resumenbloc = document.createElement('div');

    let aptes = alumnos.filter(a => a.nota == 0).length;
    let noaptes = alumnos.filter(a => a.nota == 1).length;


    let asistidos = alumnos.filter(a => a.assistencia == 0).length;
    let noasistidos = alumnos.filter(a => a.assistencia == 1).length;

    let total = alumnos.length;

    resumenbloc.innerHTML = `
                    <div class="container px-4">
                        <h2 class="pb-3 border-bottom text-center">Resum</h2>

                        <div class="row d-flex align-items-center text-center mt-5 mb-3">
                            <div>
                            <h3 class="fw-bold mb-3 fs-4 text-body-emphasis">Total alumnes</h3>
                            <p class="display-6 fw-bold">${alumnos.length}</p>
                            </div>
                        </div>
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-4 py-5">
                            <div class="col d-flex align-items-start text-center">
                            <div>
                                <h3 class="fw-bold mb-3 fs-4 text-body-emphasis">Aptes</h3>
                                <p>${aptes}</p>
                            </div>
                            </div>
                            <div class="col d-flex align-items-center text-center">
                            <div>
                                <h3 class="fw-bold mb-3 fs-4 text-body-emphasis">NO aptes</h3>
                                <p>${noaptes}</p>
                            </div>
                            </div>
                            <div class="col d-flex align-items-center text-center">
                            <div>
                                <h3 class="fw-bold mb-3 fs-4 text-body-emphasis">Presentats</h3>
                                <p>${asistidos} alumnes - ${((asistidos / total) * 100).toFixed(2)}%</p>
                            </div>
                            </div>
                            <div class="col d-flex align-items-center text-center">
                            <div>
                                <h3 class="fw-bold mb-3 fs-4 text-body-emphasis">NO presentats</h3>
                                <p>${noasistidos} alumnes - ${((noasistidos / total) * 100).toFixed(2)}%</p>
                            </div>
                            </div>
                        </div>
                    </div>

    `;

    resumen.appendChild(resumenbloc);
}

async function formulario(id) {
    form.style.display = null;
    table.style.display = 'none';
    resumen.style.display = 'none';

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


