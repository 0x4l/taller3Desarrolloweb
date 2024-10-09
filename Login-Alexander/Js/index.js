$(document).ready(function () {
    // Validar correo en tiempo real
    $("#email").on("input", function () {
        const correo = $(this).val();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!emailRegex.test(correo)) {
            $("#error-correo").text("Correo electrónico no válido. Debe tener un formato como example@dominio.com.");
        } else {
            $("#error-correo").text(""); // Limpiar mensaje de error si es válido
        }
    });

    // Validar contraseña en tiempo real
    $("#password").on("input", function () {
        const password = $(this).val();
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        
        if (!passwordRegex.test(password)) {
            $("#error-contrasena").text("La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.");
        } else {
            $("#error-contrasena").text(""); // Limpiar mensaje de error si es válida
        }
    });

    // Validación al hacer clic en "Registrar"
    $("#enviar").click(function () {
        const nombre = $("#nombre").val();
        const correo = $("#email").val();
        const password = $("#password").val();
        const fecha = $("#fecha").val();

        let esValido = true;

        // Limpiar mensajes previos
        $("#error-correo").text("");
        $("#error-contrasena").text("");
        $("#mensaje-confirmacion").text("");

        // Validar el correo
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(correo)) {
            $("#error-correo").text("Correo electrónico no válido. Debe tener un formato como example@dominio.com.");
            esValido = false;
        }

        // Validar la contraseña
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (!passwordRegex.test(password)) {
            $("#error-contrasena").text("La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.");
            esValido = false;
        }

        // Si los datos son válidos, guardar en LocalStorage
        if (esValido) {
            const datosUsuario = {
                nombre: nombre,
                correo: correo,
                password: password,
                fecha: fecha
            };

            localStorage.setItem("usuario", JSON.stringify(datosUsuario));

            // Mostrar mensaje de éxito
            $("#mensaje-confirmacion").text("Registro exitoso. Los datos han sido guardados.");
            $("#mensaje-confirmacion").css("color", "green");

            // Limpiar el formulario
            $("#formulario")[0].reset();
        }
    });
});
