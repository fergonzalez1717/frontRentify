document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener valores
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    // Validación simple 
    if(usuario === "admin" && password === "1234") {
        // Usuario válido, redirigir a nueva página
        window.location.href = "inicioconSesion.html"; //inicio para usuario registrado
    } else {
        // Mostrar error
        alert("Usuario o contraseña incorrectos");
    }
});
