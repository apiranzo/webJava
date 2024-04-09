'use strict';

var URL = 'http://localhost:3000/curso/';

$(function(){
    $('#fcursos').on('submit',guardar);
    $('#sec-tabla').hide();
    $('#sec-resum').hide();
    listado();
});

function guardar(e) {
    e.preventDefault();

    //Validación de campos del formulario
    if (!$('#fcursos')[0].checkValidity()){
        $('#fcursos').addClass('was-validated');
        return;
    }

    var alumno = {
        nombre: $('#nombre').val(),
        nota: $('#nota').val(),
        assistencia:$('#assistencia').val()
    }

    if($('#id').val()){
        alumno.id = +$('#id').val();

        //Intercambio de datos asincrónicos entre JavaScript y XML
        $.ajax(URL + alumno.id,{
            method:'PUT',
            data: alumno
        }).then(listado);
    }else{
        $.ajax(URL, {
            method:'POST',
            data: alumno
        }).then(listado);
    }
}
function listado() {
    $('#sec-form').hide();
    $('#sec-tabla').show();
    $('#sec-resum').show();

    $.getJSON(URL).then(function (alumnos) {
        $('tbody').empty();

        $.each(alumnos, function (clave, a ){
            $(`<tr>
                    <th>${a.id}</th><td>${a.nombre}</td>
                    <td>${((a.nota === "0") ? "Apte" : "No apte" )}</td>
                    <td>${((a.assistencia === "0") ? "Presentat" : "No presentat" )}</td>
                    <td>
                        <a class="btn btn-primary m-1" href="javascript:formulario(${a.id})">Editar</a>
                        <a class="btn btn-danger m-1" href="javascript:borrar(${a.id})">Borrar</a>
                    </td>
                </tr>
            `).appendTo($('tbody'));
        });
        const resumenbloc = document.createElement('div');
    
        let aptes = alumnos.filter(a => a.nota == 0).length;
        let noaptes = alumnos.filter(a => a.nota == 1).length;
    
    
        let asistidos = alumnos.filter(a => a.assistencia == 0).length;
        let noasistidos = alumnos.filter(a => a.assistencia == 1).length;
    
        let total = alumnos.length;

        let blockresum = `<div class="container px-4">
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

`
        if (total == alumnos.length){
            $('#sec-resum').empty();
            $(blockresum).appendTo($('#sec-resum'));
        } else {
            $('#sec-resum').empty();
            $(blockresum).appendTo($('#sec-resum'));
        }
    });


}

function formulario(id) {

    if (id) {
        $.getJSON(URL + id).then(function (a) {
            $('#id').val(a.id);
            $('#nombre').val(a.nombre);
            $('#nota').val(a.nota);
            $('#assistencia').val(a.assistencia);
        });
    } else {
        $('form')[0].reset();
    }

    $('#sec-form').show();
    $('#sec-tabla').hide();
    $('#sec-resum').hide();
}

function borrar(id) {
    $.ajax(URL + id, { method: 'DELETE' }).then(listado);
}


