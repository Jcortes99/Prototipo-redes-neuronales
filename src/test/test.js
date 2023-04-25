const formulario = document.getElementById('mi-formulario');

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault(); // Evita que se envíe el formulario de forma tradicional
  const datosFormulario = new FormData(formulario);
  const datos = {};
  datosFormulario.forEach((valor, llave) => {
    datos[llave] = valor;
  });
  const url = '/ruta/al/backend';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Respuesta del servidor:', data);
  })
  .catch(error => {
    console.error('Error al enviar datos al backend:', error);
  });
});
