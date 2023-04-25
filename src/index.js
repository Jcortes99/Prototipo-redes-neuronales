var contador = 0; //reintentar
var nombre= ""; 
var letraActual=""; //send
var letrasEnviadas=[]; //
var numeros = []; //count list
var indicePalabraActual = 0;
var palabras = ["_oda", "vi_a", "_ueso", "_urro","_erro","de_o","_igote","_iente","_aloma","_olor"];
var preguntas = [
    "Es parecido a un casamiento, donde la mujer lleva un vestido blanco y el hombre un esmoquín.",
    "Es el tiempo o período de duración que tiene el ser humano desde que nace hasta que muere.",
    "Es lo que suelen comer los ratones",
    "Es un animal muy parecido al caballo y es el mejor amigo de shrek.", //actualizar 
    "Es considerado el mejor amigo del hombre y hace guau guau.",
    "Si ves tu mano puedes contar que tienes 5 de estos en cada una.",
    "Es una cantidad de pelo que se dejan crecer los hombres abajo de la nariz y arriba de la boca.",
    "Son las perlas blancas que se ven cuando sonries.",
    "Son los animales con alas que sueles ver en los parques.",
    "Cuando te caes y te lastimas puedes llegar a sentir mucho..."
];

function continuar() {
    nombre = document.getElementById("nombre").value;
    if (nombre !== "") {
      document.getElementById("textoPregunta").style.display = "block";
      document.getElementById("textoPantalla").style.display = "block";
      document.getElementById("botones").style.display = "block";
      document.getElementById("extras").style.display = "block";
      document.getElementById("preguntaini").style.display = "none";
      document.getElementById("submit").style.display = "none";
      actualizarTextoPregunta(preguntas[indicePalabraActual]);
      mostrarPalabraEnPantalla(palabras[indicePalabraActual]);
    }
  }

function agregarLetra(letra) {
    var pantalla = document.getElementById("textoPantalla");
    var texto = pantalla.innerHTML;
    var indice = texto.indexOf("_");
    if (indice >= 0) {
        var nuevoTexto = texto.slice(0, indice) + letra + texto.slice(indice + 1);
        pantalla.innerHTML = nuevoTexto;
        letraActual = letra;
    }
}

function mostrarPalabraEnPantalla(palabra) {
    var pantalla = document.getElementById("textoPantalla");
    pantalla.innerHTML = palabra.replace(/_/g, "&#95;"); // ese #95 es un _ en HTML
}

function limpiar() {
    contador++;
    mostrarPalabraEnPantalla(palabras[indicePalabraActual]);
    actualizarTextoPregunta(preguntas[indicePalabraActual]);
}
function enviar() {
    var pantalla = document.getElementById("textoPantalla");
    //var palabraActual = pantalla.innerHTML.replace(/&nbsp;/g, "_");
    var nombrechild=nombre;
    numeros.push(contador); //Se podría intentar hacer un push con contador, letraActual pero no sé como probar que funcione así que toca en el back
    letrasEnviadas.push(letraActual);
    letraActual = "";
    contador=0;
    // Lógica para enviar la información al backend
    // ...
  
    // Lógica para cambiar a otra palabra después de enviar la información
    if (indicePalabraActual < palabras.length - 1) {
      indicePalabraActual++;
      mostrarPalabraEnPantalla(palabras[indicePalabraActual]);
      actualizarTextoPregunta(preguntas[indicePalabraActual]);
    } else {
      var ayuda = "";
      var ayuda1="Ya terminaste, lo hiciste muy bien.";
      mostrarPalabraEnPantalla(ayuda);
      actualizarTextoPregunta(ayuda1);
      // Ocultar los botones
      document.getElementById("botones").style.display = "none";
      document.getElementById("extras").style.display = "none";
      document.getElementById("textoPantalla").style.display = "none";
      document.getElementById("submit").style.display="block";

    }
  }

  
function actualizarTextoPregunta(pregunta) {
    var preguntaT = document.getElementById("textoPregunta");
    preguntaT.innerHTML = pregunta;
}

function terminar()  {
    var ayuda = "";
    var ayuda1= "";
    mostrarPalabraEnPantalla(ayuda);
    actualizarTextoPregunta(ayuda1);
    document.getElementById("submit").style.display="none";

}







// Objeto JavaScript que queremos enviar en formato JSON
const data = { 
  "name": "nombre", 
  "contador":  "numeros",
  "letras": "letrasEnviadas",
};

// Opciones para la petición fetch
const options = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
};

// Hacer la petición fetch con los datos en formato JSON
fetch("/data", options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
