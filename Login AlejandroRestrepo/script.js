$(document).ready(function () {
    $("#enviar").click(function () {
        const nombre = $("#nombre").val()
        const correo = $("#correo").val()
        const contrasena = $("#contrasena").val()
        const fecha = $("#fecha").val()

        let esValido = true;

        const regexCorreo = /^[a-zA-Z0-9._-]+@(gmail\.com|hotmail\.com|yahoo\.com)$/;
        if (!regexCorreo.test(correo)) {
            document.getElementById("error-correo").textContent = "El correo debe ser de los dominios gmail.com, hotmail.com o yahoo.com.";
            esValido = false;
        }

        // Validación de la contraseña
        const regexContrasena = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (!regexContrasena.test(contrasena)) {
            document.getElementById("error-contrasena").textContent = "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.";
            esValido = false;
        }

        if (esValido) {
            const datosUsuario = {
                nombre: nombre,
                correo: correo,
                contrasena: contrasena,
                fecha: fecha
            };

            localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));

            document.getElementById("mensaje-confirmacion").textContent = "Registro exitoso. Los datos han sido guardados.";
            document.getElementById("mensaje-confirmacion").style.color = "green";

            //document.getElementById("formulario").reset();
        }

    })

})

// document.getElementById("enviar").addEventListener("submit", function(event) {
//     event.preventDefault(); // Validacion antes de envio del form
//     console.log("hola")
//     const nombre = document.getElementById("nombre").value;
//     const correo = document.getElementById("correo").value;
//     const contrasena = document.getElementById("contrasena").value;
//     const fecha = document.getElementById("fecha").value;

//     let esValido = true;

//     const regexCorreo = /^[a-zA-Z0-9._-]+@(gmail\.com|hotmail\.com|yahoo\.com)$/;
//     if (!regexCorreo.test(correo)) {
//         document.getElementById("error-correo").textContent = "El correo debe ser de los dominios gmail.com, hotmail.com o yahoo.com.";
//         esValido = false;
//     }

//     // Validación de la contraseña
//     const regexContrasena = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
//     if (!regexContrasena.test(contrasena)) {
//         document.getElementById("error-contrasena").textContent = "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.";
//         esValido = false;
//     }

//     if (esValido) {
//         const datosUsuario = {
//             nombre: nombre,
//             correo: correo,
//             contrasena: contrasena,
//             fecha: fecha
//         };

//         localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));

//         document.getElementById("mensaje-confirmacion").textContent = "Registro exitoso. Los datos han sido guardados.";
//         document.getElementById("mensaje-confirmacion").style.color = "green";

//         document.getElementById("formulario").reset();
//     }
// });
