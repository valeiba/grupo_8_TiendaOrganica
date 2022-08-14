window.onload = function () {
  let formularioRegister = document.querySelector("form#form");
  formularioRegister.addEventListener("submit", function (event) {
    let errores = [];

    let campoNombre = document.querySelector("input#first_name");

    if (campoNombre.value === "") {
      errores.push("El nombre es obligatorio");
      campoNombre.classList.add("is-invalid");
    } else if (campoNombre.value.length < 2) {
      errores.push("El nombre debe tener al menos 2 caracteres");
      campoNombre.classList.add("is-invalid");
    } else {
      campoNombre.classList.remove("is-invalid");
      campoNombre.classList.add("is-valid");
    }
    let campoApellido = document.querySelector("input#last_name");
    if (campoApellido.value === "") {
      errores.push("El apellido es obligatorio");
      campoApellido.classList.add("is-invalid");
    } else if (campoApellido.value.length < 2) {
      errores.push("El apellido debe tener al menos 2 caracteres");
      campoApellido.classList.add("is-invalid");
    } else {
      campoApellido.classList.remove("is-invalid");
      campoApellido.classList.add("is-valid");
    }
    let campoEmail = document.querySelector("input#email");
    let emailValido =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (campoEmail.value === "") {
      errores.push("El Email es obligatorio");
      campoEmail.classList.add("is-invalid");
    } else if (!emailValido.test(campoEmail.value)) {
      errores.push("El Email ingresado es inválido");
      campoEmail.classList.add("is-invalid");
    } else {
      campoEmail.classList.remove("is-invalid");
      campoEmail.classList.add("is-valid");
    }
    let campoContraseña = document.querySelector("input#password");
    if (campoContraseña.value === "") {
      errores.push("La contraseña es obligatoria");
      campoContraseña.classList.add("is-invalid");
    } else if (campoContraseña.value.length < 8) {
      errores.push("La Contraseña debe tener al menos 8 caracteres");
      campoContraseña.classList.add("is-invalid");
    } else {
      campoContraseña.classList.remove("is-invalid");
      campoContraseña.classList.add("is-valid");
    }

    let campoMobile = document.querySelector("input#mobile");
    if (campoMobile.value === "") {
      errores.push("El teléfono es obligatorio");
      campoMobile.classList.add("is-invalid");
    } else if (campoMobile.value.length < 8) {
      errores.push("El teléfono debe tener al menos 7 dígitos");
      campoMobile.classList.add("is-invalid");
    } else {
      campoMobile.classList.remove("is-invalid");
      campoMobile.classList.add("is-valid");
    }

    let campoAvatar = document.querySelector("input#avatar");
    const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if (!allowedExtensions.exec(campoAvatar.value)) {
      errores.push("Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.");
      campoAvatar.classList.add("is-invalid");
      campoAvatar.value = "";
    } else {
      campoAvatar.classList.remove("is-invalid");
      campoAvatar.classList.add("is-valid");
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
