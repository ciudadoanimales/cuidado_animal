 function mostrarVistaPrevia(event) {
    const archivo = event.target.files[0];
    const vista = document.getElementById('vistaPrevia');

    if (archivo && archivo.type.startsWith('image/')) {
      const lector = new FileReader();
      lector.onload = function(e) {
        vista.src = e.target.result;
        vista.style.display = 'block';
      };
      lector.readAsDataURL(archivo);
    } else {
      vista.src = '#';
      vista.style.display = 'none';
    }
  }

  function borrarArchivo() {
    const input = document.getElementById('archivo');
    const vista = document.getElementById('vistaPrevia');
    input.value = '';
    vista.src = '#';
    vista.style.display = 'none';
  }

document.getElementById('formContacto').addEventListener('submit', function(event){

event.preventDefault();
const nombre = document.getElementById('nombre').value;

const correo = document.getElementById('correo').value;

const mensaje =document.getElementById('mensaje').value;

const nuevoMensaje = document.createElement('div'); nuevoMensaje.innerHTML =

<p><strong>${nombre}</strong>

(<em>${correo}</em>)dice:</p><p>${mensaje}</p><hr>`;document.getElementById('contenedorMensajes').appendChild(nuevoMensaje);
document.getElementById('formContacto').reset();
});


