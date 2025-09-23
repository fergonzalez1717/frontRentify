const btnEnviar = document.getElementById('btnEnviar'); // tu botón "Enviar"
const form = document.getElementById('formContacto');

btnEnviar.addEventListener('click', () => {
  // Validar formulario con Bootstrap
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }

  // Crear mensaje de confirmación
  const mensajeDiv = document.createElement('div');
  mensajeDiv.className = 'alert alert-success mt-3 d-flex align-items-center';
  mensajeDiv.role = 'alert';
  mensajeDiv.innerHTML = `🎫 Mensaje enviado. ¡Gracias por contactarnos!`;

  // Agregar mensaje dentro del modal, debajo del formulario
  const modalBody = document.querySelector('#contactoModal .modal-body');
  modalBody.appendChild(mensajeDiv);

  // Limpiar formulario
  form.reset();

  // Crear o recuperar instancia del modal
  const modalEl = document.getElementById('contactoModal');
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);

  // Cerrar modal automáticamente después de 3 segundos y quitar mensaje
  setTimeout(() => {
    modal.hide();
    mensajeDiv.remove();
  }, 3000);
});
