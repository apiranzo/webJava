'use strict';
// alert('prueba en documento adjunto');

// Referencias de JAVASCRIPT
    // https://es.javascript.info/

    /* API de consola */

console.log('prueba en documento adjunto');
console.warn('aviso');
console.error('error');

console.debug('Depuración');

console.table([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.table([1,2,'mundo','hola'], [2,5,'mundo']);


    /* TIPOS DE DATOS */
var variable = 'mundo';
console.log(variable, typeof variable); 
//con el operador typeof podemos saber de que tipo de variable estamos trabajando

variable = 5;
console.log(variable, typeof variable);

variable = true;
console.log(variable, typeof variable);

    /* Declaración variables */
console.log(v, typeof v);
console.log(v, typeof undefined); //Tipo de valor no definido
var v = '5';

//Let no se puede consultar antes de ser inicializada
//console.log(v2, typeof v2); - No se puede hacer
let v2 = '10';
const v3 = '15'; 
console.log(v3);
/*
v3 = 23; //No se puede reasignar
console.log(v3); */

    /* Escritura Strings */
var t1 = 'texto';
var t2 = "texto";
var t3 = `texto
            multi`+{v2}+` línea`;
console.log(t1, t2, t3);


    /* Arrays */
const arr = new Array(3);
console.log(arr);
arr[2]= 10;
console.log(arr);
arr.push('hola');
arr['puedes'] = 'ver';
arr.otromas = true;

console.table(arr);
/* NO TODOS TE VAN A DAR LOS MISMOS RESULTADOS */
console.warn('forEach');
arr.forEach(element => {
    console.log(element);
    
});

console.warn('forEach2');
/* arr.forEach(element, index => {
    console.log(element, index);
}) */

console.warn('for de valores ');
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.warn('for de clave in array');
for(let clave in arr){
    console.log(clave, arr[clave]);
}
console.warn('for de dato in array');
for(let dato in arr){
    console.log(dato);
}

    /* FUNCIONES */
//Las funciones son variables
function saludar(){
    const s = 'Hola';	
}

console.log(typeof saludar());

function somar(a, b){
    return a + b;
}
console.log(somar(5, 10));
console.log(somar(5, '10'));

// NAN - NONUMBER
const NAN = +5;
console.log(NAN, typeof NAN);


// función anónima 
const restar = function(a, b){
    return a - b;
}
console.log(typeof restar, restar(10, 7));

const multiplicar = (a,b) => a * b;
console.log(typeof multiplicar, multiplicar(10, 7));


function funciones(){
    (function ejemploIIFE(){
        console.log('ejemplo IIFE');
        const nombre = 'javier';
        console.log(`Hola ${nombre}`);
    })();

    (function ejemplo2IIFE(nombre){
        console.log(`Hola ${nombre}`);
    })(`Anna`);

}


funciones();

    /* OPERADORES */
// instance of - verifica si un objeto es instancia de una clase
// typeof - verifica el tipo de dato de una variable

    /* sentencias de control */

        /* OBJETOS */
function objetos(){
    const persona = {};
    const persona2 = {};

    persona.nombre = 'Pepe';
    persona.apellido = 'Leire';
    persona.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
    persona['edad']= 30;

    persona2.nombre = 'Anna';

    const personas = {persona, persona2};

    console.table(personas, typeof personas);
}

objetos();

//function constructora - Creación de variables de instancia
function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
//Cada objeto de persona va a asumir la función nombre completo
Persona.prototype.nombreCompleto = function(){
    return this.nombre + ' ' + this.apellido;
}

const p1 = new Persona('Javier' , 'Leire');
const p2 = new Persona('Anna' , 'Leire');

p1.edad = 20;

console.log(p1, typeof p1);
console.table(p1.nombreCompleto(), p2);
console.log(p1.constructor.name);

    /*Classes */

    class Persona2{
        constructor(nombre, apellido){
            this.nombre = nombre;
            this.apellido = apellido;
        }
        get nombre(){
            return this.nombre;
        }

        set nombre(nNombre){
            if (typeof nNombre !== 'string'){
                throw new Error('El nombre debe ser una cadena de texto');
            }
            this.nombre = nNombre;
        }
        get apellido(){
            return this.apellido;
        }
        set apellido(nApellido){
            if (typeof nApellido !== 'string'){
                throw new Error('El apellido debe ser una cadena de texto');
            }
            this.apellido = nApellido;
        }
        nombreCompleto(){
            return this.nombre + ' ' + this.apellido;
        }
    }
    
    const p3 = new Persona2('Javier' , 'Leire');
    

    p3.edad = 20;
   
    
    console.log(p3, typeof p3, p3.constructor.name, p3.nombreCompleto());





