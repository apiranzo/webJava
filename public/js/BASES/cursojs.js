
/* Curso JS */
// https://es.javascript.info/

//Tarea 1
/*alert('¡Soy JavaScript!');

[1, 2].forEach(alert); // Mostrará 2 alertas primero con 1, después con el 2
*/
/* Accesos rápidos 

    CTRL+SHift+/ -> comentar varias líneas
    CTRL+/ -> comentar una línea

    */

    'use strict';
/*
    'use strict'
    Directiva al inicio del código para uso moderno del lenguaje
    Se puede usar sólo a determinadas funciones o partes del 
    código */

    // VARIABLES
/* Almacenamiento de datos */

    let message = 'x'; // declarada e inicializada
    let message2; // declarada
    message2 = 'a'; // inicializada
  //  alert(message2); 

    // variables inicializadas y declaradas multilínea
    let user = 'John',
        age = 25,
        mes3 = 'Hola';

    // Declaración constantes - variables inmutables
    const camelCase = 'se definen así';
  //  camelCase = 'esto no es posible'; // no se puede redefinir
    const COLOR_RED = '#F00';
    // para constantes conocidas antes de cargar la web se usa MAYUSCULAS

// Tarea 2
    let admin;
    let name = 'John';
    admin = name;
    console.log(admin);

// Tarea 3
    const ourPlanet = 'tierra';
    let usuario = 'nombreUser';

// Tarea 4
    const birthday = '05.10.1996';
   // let age2 = someCode(birthday);
   
   // TIPOS DE DATOS
   //Number - representa tanto enteros como de punto flotante
   // Valores numéricos especiales: Infinity, -infiity, NaN
   console.log(1/0); // Infinity
   console.log(Infinity);
   console.log('no es num' / 2); // NaN
   console.log(NaN + 1); //Not a Number

   //Para poder almacenar un BigInt (entero mayor que 2^53) hace falta 'n'
   const bigInt = 1234567890123456789012345678901234567890n;

   // STRING
   let str = 'hola';
   let str2 = "doble";
   let phrase = `${str} se puede
                añadir al 
                ${str2}`;

    // BOOLEAN
    let bol = true;
    let bol2 = false;
    let bol3 = 4 < 5;

    console.log(bol); // true
    console.log(bol2); // false
    console.log(bol3); // true

    // NULL Y undefined
    // Representa el vacío o desconocido (NO A UN OBJETO INEXISTENTE)
    // Valor no asignado
    let esto = null;
    let yesto;
    let estotambien = undefined;

    console.log(null); //null
    console.log(yesto); //undefined
    console.log(estotambien); //undefined

    //Object y Symbol
    // Object -> almacenar colecciones de datos y entidades
    // symbol -> se usa para crear identificadores únicos para los objetos
    typeof undefined // "undefined"
    typeof 0 // "number"
    typeof 10n // "bigint"
    typeof true // "boolean"
    typeof "foo" // "string"
    typeof Symbol("id") // "symbol"
    typeof Math // "object"  (1)
    typeof null // "object"  (2)
    typeof alert // "function"  (3)


    //INTERACCIÓN
//Funciones de interacción con el usuario mediante navegador

    /*
        alert -> muestra un mensaje y espera a que se presione "aceptar"
        prompt -> muestra una ventana con texto, un campo de entrada y dos botones
        confirm -> muestra una ventana que devuelve true of false
        */

        alert("hola");

        age = prompt ('¿Cuántos años tienes?', 100);
        alert(`Tienes ${age} años!`); //Tienes 100 años!

        let isBoss = confirm("¿Eres el jefe?");

        isBoss ? alert('Entra')  : alert('Fuera');

    // Conversiones
    /*
        Las más usadas són:
        ToString:
            String(value);
        ToNumber:
            Number(value);
        ToBoolean:
            Boolean(value); // 0 o 1;
    */
   let value = true;
   value = String(value); // value = 'true';
   value = Number(value); // Nan, CONVERSIÓN FALLIDA
   let value2 = Number(true); // 1
   let value3 = Number(false); //0
   Boolean('hola'); // true
   Boolean(''); //false
   Boolean(1); //true
   Boolean(0); //false

   // OPERADOR TERNARIO MÚLTIPLE
    age = prompt('¿edad?', 18);

    message = (age < 3) ? '¡Hola, bebé!' :
     (age < 18) ? '¡Hola!' :
     (age < 100) ? '¡Felicidades!' :
     '¡Qué edad tan inusual!';
   
   alert( message );

    /* Equivalencia a ELSE/IF

    if (age < 3) {
  message = '¡Hola, bebé!';
} else if (age < 18) {
  message = '¡Hola!';
} else if (age < 100) {
  message = '¡Felicidades!';
} else {
  message = '¡Qué edad tan inusual!';
} 
*/

// Tarea

    let nom = 'ECMAScript';
    let res = prompt('Cuál es el nombre oficial de JavaScript', '');

    res === nom? alert('Correcto!') : alert('No sabes?');


