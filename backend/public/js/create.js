window.onload = function(){
  let formulario= document.querySelector('#formproduct');
  formulario.addEventListener("submit",function(event){
      let errores=[]
      let campoNombre= document.querySelector("input#name");
      let labelNombre = document.querySelector("label[for='name']");
      if(campoNombre.value == ""){
          errores.push("El Nombre es obligatorio ")
          campoNombre.classList.add('is-invalid',"animation-shake")
          labelNombre.classList.add("text-invalid");
      }else if(campoNombre.value.length < 5){
          errores.push("El Nombre debe tener al menos 5 caracteres")
          campoNombre.classList.add('is-invalid',"animation-shake")
          labelNombre.classList.add("text-invalid");
      }
      campoNombre.addEventListener('change', function(){
      if(campoNombre.value !== "" && campoNombre.value.length > 5){
          campoNombre.classList.remove('is-invalid');
          labelNombre.classList.remove("text-invalid");
          campoNombre.classList.add('is-valid');
          labelNombre.classList.add("text-valid");
      }})
      let campoPrecio= document.querySelector("input#price");
      let labelPrecio = document.querySelector("label[for='price']");
      if(campoPrecio.value == ""){
          errores.push(" Debe ingresar el Precio del producto")
          campoPrecio.classList.add('is-invalid',"animation-shake")
          labelPrecio.classList.add("text-invalid");
      }
      campoPrecio.addEventListener('change', function(){
          if(campoPrecio.value !== ""){
          campoPrecio.classList.remove('is-invalid');
          labelPrecio.classList.remove("text-invalid");
          campoPrecio.classList.add('is-valid');
          labelPrecio.classList.add("text-valid");
         
      }})
      let campoPresentación= document.querySelector("select#presentation");
      let labelPresentación = document.querySelector("label[for='presentation']");
      if(campoPresentación.value ==""){
        errores.push(" Debe seleccionar la Presentación del producto")
        campoPresentación.classList.add('is-invalid',"animation-shake")
        labelPresentación.classList.add("text-invalid");
      }
      campoPresentación.addEventListener('change', function(){
    if(campoPresentación.value !==""){

          campoPresentación.classList.remove('is-invalid');
          labelPresentación.classList.remove("text-invalid");
          campoPresentación.classList.add('is-valid');
          labelPresentación.classList.add("text-valid");
          
      }})
      let campoStock= document.querySelector("input#stock");
      let labelStock = document.querySelector("label[for='stock']");
      if(campoStock.value ==""){
          errores.push(" Debe ingresar el Stock del producto")
          campoStock.classList.add('is-invalid',"animation-shake")
          labelStock.classList.add("text-invalid");
      }
      campoStock.addEventListener('change', function(){
        if(campoStock.value !==""){
          campoStock.classList.remove('is-invalid');
          labelStock.classList.remove("text-invalid");
          campoStock.classList.add('is-valid');
          labelStock.classList.add("text-valid");
        
      }})
       let campoSale= document.querySelector("select#on_sale");
       let labelSale = document.querySelector("label[for='on_sale']");
      if(campoSale.value == ""){
          errores.push("Debe seleccionar si el producto esta en Oferta")
          campoSale.classList.add('is-invalid',"animation-shake");
          labelSale.classList.add("text-invalid");
      }
      campoSale.addEventListener('change', function(){
      if(campoSale!== ""){
          campoSale.classList.remove('is-invalid');
          labelSale.classList.remove("text-invalid");
          campoSale.classList.add('is-valid');
          labelSale.classList.add("text-valid");
          
      }})

      let campoDescripcion= document.querySelector("textarea#description");
      let labelDescripción = document.querySelector("label[for='description']");
      if(campoDescripcion.value.length < 20){
          errores.push(" La Descripción debe tener al menos 20 caracteres")
          campoDescripcion.classList.add('is-invalid',"animation-shake");
          labelDescripción.classList.add("text-invalid");
      }
      campoDescripcion.addEventListener('change', function(){
        if(campoDescripcion.value.length > 20) {
          campoDescripcion.classList.remove('is-invalid');
          labelDescripción.classList.remove("text-invalid");
          campoDescripcion.classList.add('is-valid');
          labelDescripción.classList.add("text-valid");
          
      }})
      let campoCategoria= document.querySelector("select#category_id");
      let labelCategoria = document.querySelector("label[for='category_id']");
      if(campoCategoria.value ==""){
          errores.push(" Debe seleccionar la Categoría del producto")
          campoCategoria.classList.add('is-invalid',"animation-shake");
          labelCategoria.classList.add("text-invalid");
      } 
      campoCategoria.addEventListener('change', function(){
      if(campoCategoria.value !==""){
    
        
          campoCategoria.classList.remove('is-invalid');
          labelCategoria.classList.remove("text-invalid");
          campoCategoria.classList.add('is-valid');
          labelCategoria.classList.add("text-valid");
          
         
      }})
      let campoImagen= document.querySelector("input#image")
      let labelImagen = document.querySelector("label[for='image']");
    
      var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
      if(!allowedExtensions.exec(campoImagen.value)){
          errores.push('Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.');
          campoImagen.classList.add('is-invalid',"animation-shake");
          labelImagen.classList.add("text-invalid");
      }else if((campoImagen.value)== null){
       
          errores.push("Debe agregar una Imagen al producto")
          campoImagen.classList.add('is-invalid',"animation-shake");
          labelImagen.classList.add("text-invalid");
      }
      campoImagen.addEventListener('change', function(){
      if(allowedExtensions.exec(campoImagen.value)){
          campoImagen.classList.remove('is-invalid');
          labelImagen.classList.remove("text-invalid");
          campoImagen.classList.add('is-valid');
          labelImagen.classList.add("text-valid");
          
      }})
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