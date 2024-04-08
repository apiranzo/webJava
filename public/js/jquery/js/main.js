'use strict';

//Uso JQuery
/***
 * ESTRUCTURA GENERAL
 * 
 * $("selector").acción 
 * 
 * 
 */

//$("h1").hide(); //.hide() función para esconder elemento

// DOM con JQuery
$(document).ready(function(){

    $("p").css({"background-color": "red"});

    $("#segundo").css({"background-color": "blue"});

    $(".parrafo").css({"background-color": "green"});

    $("#btn-hide").click(function(){
        $("#segundo").hide();
    });

    $("#btn-show").click(function(){
        $("#segundo").show();
        $(".parrafo").fadeIn();
    });

    $("#btn-dbclick").on("mouseenter", function(){
        $(".parrafo").fadeOut();
    });

    $("#btn-dbclick").on("mouseeleave",function(){
        $(".parrafo").fadeIn();
    });

    $("#btn-dbclick").on("mouseleave",function(){
        $("#primero").fadeIn();
    });

    $("#primero").on("mouseenter", function(){
        $("#primero").slideDown();
    });

    $("#primero").on("mouseleave", function(){
        $("#primero").slideUp();
    });

    $("#cuarto").animate({
        width: "150px"
    });

    //Añadir elementos
    $("#segundo").on("mouseenter",function(){
        //Añadir elementos en el documento 
        $("#cuarto").text("Hola");
        $("#cuarto").html("Hola <strong>pepa</strong>");

        $("#segundo").append("añadido");
        $("p").prepend("Texto: ");

        $("p").after('<p class="despues">despues de todo</p>');
        $("p").before("<p>antes</p");
        $(".despues").remove();
        $("#cuarto").empty();
        //Obtener el contenido de un attributo
        alert($("#cuarto").attr("title"));

    });

    


});