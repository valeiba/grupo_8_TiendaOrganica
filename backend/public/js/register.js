window.onload = function () {
  let formularioRegister = document.querySelector("form#form");
  formularioRegister.addEventListener("submit", function (event) {
    let errores = [];

    let campoNombre = document.querySelector("input#first_name");
    let labelNombre = document.querySelector("label[for='first_name']");
    if (campoNombre.value === "") {
      errores.push("El nombre es obligatorio");
      campoNombre.classList.add("is-invalid", "animation-shake");
      labelNombre.classList.add("text-invalid");
    } else if (campoNombre.value.length < 2) {
      errores.push("El nombre debe tener al menos 2 caracteres");
      campoNombre.classList.add("is-invalid", "animation-shake");
      labelNombre.classList.add("text-invalid");
    } else {
      campoNombre.classList.remove("is-invalid");
      labelNombre.classList.remove("text-invalid");
      campoNombre.classList.add("is-valid");
      labelNombre.classList.add("text-valid");
    }

    let campoApellido = document.querySelector("input#last_name");
    let labelApellido = document.querySelector("label[for='last_name']");
    if (campoApellido.value === "") {
      errores.push("El apellido es obligatorio");
      campoApellido.classList.add("is-invalid", "animation-shake");
      labelApellido.classList.add("text-invalid");
    } else if (campoApellido.value.length < 2) {
      errores.push("El apellido debe tener al menos 2 caracteres");
      campoApellido.classList.add("is-invalid", "animation-shake");
      labelApellido.classList.add("text-invalid");
    } else {
      campoApellido.classList.remove("is-invalid");
      labelApellido.classList.remove("text-invalid");
      campoApellido.classList.add("is-valid");
      labelApellido.classList.add("text-valid");
    }

    let campoEmail = document.querySelector("input#email");
    let labelEmail = document.querySelector("label[for='email']");
    let emailValido =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (campoEmail.value === "") {
      errores.push("El Email es obligatorio");
      campoEmail.classList.add("is-invalid", "animation-shake");
      labelEmail.classList.add("text-invalid");
    } else if (!emailValido.test(campoEmail.value)) {
      errores.push("El Email ingresado es inválido");
      campoEmail.classList.add("is-invalid", "animation-shake");
      labelEmail.classList.add("text-invalid");
    } else {
      campoEmail.classList.remove("is-invalid");
      labelEmail.classList.remove("text-invalid");
      campoEmail.classList.add("is-valid");
      labelEmail.classList.add("text-valid");
    }

    let campoContrasena = document.querySelector("input#password");
    let labelContrasena = document.querySelector("label[for='password']");
    if (campoContrasena.value === "") {
      errores.push("La contraseña es obligatoria");
      campoContrasena.classList.add("is-invalid", "animation-shake");
      labelContrasena.classList.add("text-invalid");
    } else if (campoContrasena.value.length < 8) {
      errores.push("La Contraseña debe tener al menos 8 caracteres");
      campoContrasena.classList.add("is-invalid", "animation-shake");
      labelContrasena.classList.add("text-invalid");
    } else {
      campoContrasena.classList.remove("is-invalid");
      labelContrasena.classList.remove("text-invalid");
      campoContrasena.classList.add("is-valid");
      labelContrasena.classList.add("text-valid");
    }

    let campoMobile = document.querySelector("input#mobile");
    let labelMobile = document.querySelector("label[for='mobile']");
    if (campoMobile.value === "") {
      errores.push("El teléfono es obligatorio");
      campoMobile.classList.add("is-invalid", "animation-shake");
      labelMobile.classList.add("text-invalid");
    } else if (campoMobile.value.length < 7) {
      errores.push("El teléfono debe tener al menos 7 dígitos");
      campoMobile.classList.add("is-invalid", "animation-shake");
      labelMobile.classList.add("text-invalid");
    } else {
      campoMobile.classList.remove("is-invalid");
      labelMobile.classList.remove("text-invalid");
      campoMobile.classList.add("is-valid");
      labelMobile.classList.add("text-valid");
    }

    let campoAvatar = document.querySelector("input#avatar");
    let labelAvatar = document.querySelector("label[for='avatar']");
    const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if (!allowedExtensions.exec(campoAvatar.value)) {
      errores.push("Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.");
      campoAvatar.classList.add("is-invalid", "animation-shake");
      labelAvatar.classList.add("text-invalid");
      campoAvatar.value = "";
    } else {
      campoAvatar.classList.remove("is-invalid");
      labelAvatar.classList.remove("text-invalid");
      campoAvatar.classList.add("is-valid");
      labelAvatar.classList.add("text-valid");
    }

    if (errores.length > 0) {
      event.preventDefault();
      const erroresInput = document.querySelector("div.errores ul");
      erroresInput.classList.add("alert-warning");
      erroresInput.innerHTML = "";
      for (let i = 0; i < errores.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = errores[i];
        erroresInput.appendChild(li);
      }
    }
  });
};
