var contador = 0;
var palabras = ["_oda", "vi_a", "_ueso", "_urro"];
var indicePalabraActual = 0;

function agregarLetra(letra) {
    var pantalla = document.getElementById("textoPantalla");
    var texto = pantalla.innerHTML;
    var indice = texto.indexOf("_");
    if (indice >= 0) {
        var nuevoTexto = texto.slice(0, indice) + letra + texto.slice(indice + 1);
        pantalla.innerHTML = nuevoTexto;
    }
}

function limpiar() {
    contador++;
    mostrarPalabraEnPantalla(palabras[indicePalabraActual]);
}

function mostrarPalabraEnPantalla(palabra) {
    var pantalla = document.getElementById("textoPantalla");
    pantalla.innerHTML = palabra.replace(/_/g, "&#95;"); // ese #95 es un _ en HTML
}

function enviar() {
    var pantalla = document.getElementById("textoPantalla");
    var palabraActual = pantalla.innerHTML.replace(/&nbsp;/g, "_");
    var enviado=contador;
    contador=0;
    // Lógica para enviar la información al backend
    // ...
  
    // Lógica para cambiar a otra palabra después de enviar la información
    if (indicePalabraActual < palabras.length - 1) {
      indicePalabraActual++;
      mostrarPalabraEnPantalla(palabras[indicePalabraActual]);
    } else {
      var ayuda = "";
      //document.getElementById("Reintentar").style.display = "block";
      mostrarPalabraEnPantalla(ayuda)
    }
  }
  
  
/*function agregarLetra(letra) {
    contador=0;
    var pantalla = document.getElementById("textoPantalla");
    // pantalla.innerHTML.pop()
    pantalla.innerHTML = letra + pantalla.innerHTML;
    contador=contador+1;
    }
var letraAnterior = "_";

function agregarLetra(letra) {
    var pantalla = document.getElementById("textoPantalla");
    if (pantalla.innerHTML.indexOf("_") === -1) {
    pantalla.innerHTML = "_";
    }
    if (letraAnterior !== "_") {
    pantalla.innerHTML = pantalla.innerHTML.replace(letraAnterior, "_");
    }
    letraAnterior = letra;
    pantalla.innerHTML = pantalla.innerHTML.replace("_", letra);
}

function limpiarPantalla() {
    letraAnterior = "_";
    document.getElementById("textoPantalla").innerHTML = "_";
}*/

    