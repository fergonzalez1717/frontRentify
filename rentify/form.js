// Variables
var rut = document.getElementById("rut");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");
var nombre_usu = document.getElementById("usuario");
var contraseña = document.getElementById("password");
var confirmarContraseña = document.getElementById("confirmarPassword");
var ciudad = document.getElementById("ciudad");
var terminosCheckbox = document.getElementById("terminos");

// Constantes
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

// Evitar envío automático
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Validar
function validar() {
  // Limpiar mensajes
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  let todoOk = true;

  if (rut.value.length > 11 || rut.value.length < 9 || rut.value.trim() == "") {
    mostrarMensajeError("rut", "Rut debe contener entre 9 y 11 caracteres");
    todoOk = false;
  }

  if (nombre.value.length < 2 || nombre.value.length > 50 || nombre.value.trim() == "") {
    mostrarMensajeError("nombre", "Nombre debe contener entre 2 y 50 caracteres");
    todoOk = false;
  }

  if (apellido.value.trim() == "" || apellido.value.length < 2) {
    mostrarMensajeError("apellido", "Apellido es obligatorio (mínimo 2 caracteres)");
    todoOk = false;
  }

  if (correo.value.trim() === "" || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo.value.trim())) {
    mostrarMensajeError("correo", "Correo debe tener un formato válido");
    todoOk = false;
  }

  if (correo.value.length > 100) {
    mostrarMensajeError("correo", "Correo no debe superar 100 caracteres");
    todoOk = false;
  }

  if (nombre_usu.value.length < 4 || nombre_usu.value.length > 20 || nombre_usu.value.trim() == "") {
    mostrarMensajeError("nombre_usu", "Usuario debe contener entre 4 y 20 caracteres");
    todoOk = false;
  }

  if (contraseña.value.length < 8 || contraseña.value.trim() == "") {
    mostrarMensajeError("contraseña", "Contraseña debe tener al menos 8 caracteres");
    todoOk = false;
  }

  if (confirmarContraseña.value.trim() === "" || confirmarContraseña.value !== contraseña.value) {
    mostrarMensajeError("confirmarContraseña", "Las contraseñas no coinciden");
    todoOk = false;
  }

  if (ciudad.value === "") {
    mostrarMensajeError("ciudad", "Debes seleccionar una ciudad");
    todoOk = false;
  }

  if (!terminosCheckbox.checked) {
    mostrarMensajeError("terminos", "Debes aceptar los términos y condiciones");
    todoOk = false;
  }

  if (todoOk) {
    alert("¡Todos los campos están correctos!");
    form.reset();
  }
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}