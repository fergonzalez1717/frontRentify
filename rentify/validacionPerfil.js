(() => {
  'use strict';

  const form = document.getElementById('formPerfil');

  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      // Si NO es válido → mostramos errores
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Si es válido → redirige a inicioconSesion.html
      event.preventDefault();
      alert("¡Documentos subidos correctamente!");
      form.reset();
      window.location.href = "inicioconSesion.html"; // redirección
    }

    form.classList.add('was-validated');
  }, false);

})();