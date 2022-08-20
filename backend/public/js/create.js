window.onload = function(){
  let formulario= document.querySelector('#form');
  formulario.addEventListener("submit",function(event){
      let errores=[]
      let campoNombre= document.querySelector("input#name");
      campoNombre.focus()
      if(campoNombre.value === ""){
          errores.push("El Nombre es obligatorio ")
          campoNombre.classList.add('is-invalid')
      }else if(campoNombre.value.length < 5){
          errores.push("El Nombre debe tener al menos 5 caracteres")
          campoNombre.classList.add('is-invalid')
      }else{
          campoNombre.classList.remove('is-invalid');
          campoNombre.classList.add('is-valid');
      }
      let campoPrecio= document.querySelector("input#price");
      if(campoPrecio.value == ""){
          errores.push(" Debe ingresar el Precio del producto")
          campoPrecio.classList.add('is-invalid')
      }else{
          campoPrecio.classList.remove('is-invalid');
          campoPrecio.classList.add('is-valid');
          campoPrecio.focus();
      }
      let campoPresentación= document.querySelector("select#presentation");
      if(campoPresentación.value ==""){
          errores.push(" Debe seleccionar la Presentación del producto")
          campoPresentación.classList.add('is-invalid')
      }else{
          campoPresentación.classList.remove('is-invalid');
          campoPresentación.classList.add('is-valid');
          campoPresentación.focus();
      }
      let campoStock= document.querySelector("input#stock");
      if(campoStock.value ==""){
          errores.push(" Debe ingresar el Stock del producto")
          campoStock.classList.add('is-invalid')
      }else{
          campoStock.classList.remove('is-invalid');
          campoStock.classList.add('is-valid');
          campoStock.focus();
      }
       let campoSale= document.querySelector("select#on_sale");
      if(campoSale.value == ""){
          errores.push("Debe seleccionar si el producto esta en Oferta")
          campoSale.classList.add('is-invalid')
      }else{
          campoSale.classList.remove('is-invalid');
          campoSale.classList.add('is-valid');
          campoSale.focus();
      }
      let campoDescripcion= document.querySelector("textarea#description");
      if(campoDescripcion.value.length < 20){
          errores.push(" La Descripción debe tener al menos 20 caracteres")
          campoDescripcion.classList.add('is-invalid')
      }else{
          campoDescripcion.classList.remove('is-invalid');
          campoDescripcion.classList.add('is-valid');
          campoDescripcion.focus();
      }
      let campoCategoria= document.querySelector("select#category_id");
      if(campoCategoria.value ==""){
          errores.push(" Debe seleccionar la Categoría del producto")
          campoCategoria.classList.add('is-invalid')
      }else{
          campoCategoria.classList.remove('is-invalid');
          campoCategoria.classList.add('is-valid');
          campoCategoria.focus();
      }
      let campoImagen= document.querySelector("input#image")
    
      var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
      if(!allowedExtensions.exec(campoImagen.value)){
          errores.push('Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.');
          campoImagen.classList.add('is-invalid')
      }else if(campoImagen.value == 0){
          errores.push("Debe agregar una Imagen al producto")
          campoImagen.classList.add('is-invalid')
      }else{
          campoImagen.classList.remove('is-invalid');
          campoImagen.classList.add('is-valid');
          campoImagen.focus();
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
  })
}