// validacionForm.js
(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // ✅ Si pasa la validación, redirige a inicio.html
        event.preventDefault(); // evita recarga del form
        window.location.href = "inicio.html";
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
