window.onload = function () {
  let formulario = document.querySelector("#form");
  formulario.addEventListener("submit", function (event) {
    let errores = [];

    let campoNombre = document.querySelector("input#name");
    if (campoNombre.value === "") {
      errores.push("El nombre es obligatorio");
      campoNombre.classList.add("is-invalid");
    } else if (campoNombre.value.length < 5) {
      errores.push("El nombre debe tener al menos 5 caracteres");
      campoNombre.classList.add("is-invalid");
    } else {
      campoNombre.classList.remove("is-invalid");
      campoNombre.classList.add("is-valid");
    }

    let campoPrecio = document.querySelector("input#price");
    if (campoPrecio.value === "") {
      errores.push("El precio es obligatorio");
      campoPrecio.classList.add("is-invalid");
    } else {
      campoPrecio.classList.remove("is-invalid");
      campoPrecio.classList.add("is-valid");
    }

    let campoStock = document.querySelector("input#stock");
    if (campoStock.value === "") {
      errores.push("El stock es obligatorio");
      campoStock.classList.add("is-invalid");
    } else {
      campoStock.classList.remove("is-invalid");
      campoStock.classList.add("is-valid");
    }

    // let campoOnSale = document.querySelector("#on_sale");
    // if (campoOnSale.value === "") {
    //   errores.push("Completá si el producto está en oferta o no");
    //   campoOnSale.classList.add("is-invalid");
    // } else {
    //   campoOnSale.classList.remove("is-invalid");
    //   campoOnSale.classList.add("is-valid");
    // }

    let campoDescripcion = document.querySelector("textarea#description");
    if (campoDescripcion.value.length < 20) {
      errores.push("La descripción debe tener al menos 20 caracteres");
      campoDescripcion.classList.add("is-invalid");
    } else {
      campoDescripcion.classList.remove("is-invalid");
      campoDescripcion.classList.add("is-valid");
    }

    let campoImagen = document.querySelector("input#image");
    const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if (!allowedExtensions.exec(campoImagen.value)) {
      errores.push("Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.");
      campoImagen.value = "";
    } else {
      campoImagen.classList.remove("is-invalid");
      campoImagen.classList.add("is-valid");
    }

    if (errores.length > 0) {
      event.preventDefault();
      let erroresInput = document.querySelector("div.errores ul");
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
