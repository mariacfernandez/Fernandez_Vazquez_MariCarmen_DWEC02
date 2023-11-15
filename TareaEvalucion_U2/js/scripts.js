'use strict'

console.log('Empieza el programa')

// ------------------- VARIABLES GLOBALES ------------------------

// capturamos el formulario de introduccion de socios - Ejercicio 1
const formulario = document.querySelector('#formNombre')

// capturamos el contenedor donde escribiremos los socios - Ejercicio 2
const contenedorEscribirSocios = document.getElementById(
  'contenedorPintarSocios'
)
// definicion de la clase Socio
class Socio {
  constructor( nombre, apellido) {
      
      this._nombre = nombre;
      this._apellido = apellido;
  }

}
// TODO: array para añadir los socios
let arraySocios=[];


// ------------------- FUNCIONES ------------------------

// EJERCICIO 1

/*
  funcion para leer del JSON
*/
function cargarSociosJSON () {
  let path = 'model/datosSocios.json'
  
  let request = new Request(path, {
    headers: new Headers({
      'Content-Type': 'text/json'
    }),
    method: 'GET'
  })

  fetch(request).then(response => {
    response.json().then(data => {
      console.log('Datos', data);
      aniadirSociosInicialesArray(data);
    })
  })
}

/* 
TODO:  metodo para añadir socios al array 
    cuando arranca la pagina web
*/

function aniadirSociosInicialesArray (datosFichero) {
 //  TODO: cargar el fichero JSON, parsearlo a objetos tipo "socio" y añadirlos al array
 let arrayInterno = [];
 console.log('entra en aniadirSocios');
 arrayInterno = datosFichero;
 
 for (let i = 0; i < arrayInterno.length; i++) {
 // console.log ('nombre',arrayInterno[i].nombre,arrayInterno[i].apellido);
  let socio = new Socio (arrayInterno[i].nombre,arrayInterno[i].apellido )
  arraySocios.push(socio);
 // console.log ('arraySocios', [i],arraySocios[i]);
  }
}

//cargarSociosJSON();
/*
    TODO: Metodo para capturar los datos del socio introducidor en el formulario

*/
function capturarDatosSocio () {
  // TODO: recoger los el nombre y apellido del HTML
  console.log('entra en capturar')
  let nombre= document.getElementById("fnombre").value;
  let apellido= document.getElementById("fapellido").value;
  crearSocio(nombre,apellido);
arraySocios.forEach(function(elemento) {
  console.log('e',elemento);
});
  // TODO: crear el socio y añadirlo al array
}

/* 
TODO: 
    Metodo para crear un socio pasandole el nombre y el apellido
    y añadirlo al array
 */
function crearSocio (nombre, apellido) {
  // TODO: crear objeto socio
  let socio = new Socio (nombre, apellido);
  // TODO: añadir el objeto al array
  arraySocios.push(socio);


}

/*
TODO: 
    Metodo para crear el ID del socio en funcion del ultimo
    ID que hay en el array de socios
*/
function crearID () {
  // TODO: mirar el id del ultimo socio del array y sumarle uno
  let id;
  for (let i = 0; i < arraySocios.length; i++) {
    id = i;
     }
     id = id +1;
     return id;
}

// EJERCICIO 2

/*
  TODO: metodo que elimina la lista previamente pintada en el contenedor asignado 
  para pintar socios, recorre el array con un bucle y pinta los socios 
*/
function pintarListaSocios () {
  //TODO: borramos todo lo que hay en el div
contenedorEscribirSocios.innerHTML = "";

  //TODO: bucle para recorrer y pintar el array de socios
  for (let i = 0; i < arraySocios.length; i++) {
    let idSocio = i + 1;
    let nombre = arraySocios[i]._nombre
    let apellido = arraySocios[i]._apellido
    
    contenedorEscribirSocios.innerHTML += "socio numero "+ idSocio + ": "  + " " + nombre + " " + apellido + "<br>"
     }
  //TODO: debemos añadir los socios a la pagina web
}

// ------------------- MAIN ------------------------

// TODO: añadimos los socios iniciales cuando empieza el programa
cargarSociosJSON();
console.log('Acaba el programa')



