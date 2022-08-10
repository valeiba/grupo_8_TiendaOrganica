window.onload = function(){
    let formulario= document.querySelector('form.main-form');
    formulario.addEventListener("submit",function(event){
        let errores=[]
        let campoNombre= document.querySelector("input#name");
        if(campoNombre.value === ""){
            errores.push("El campo nombre es obligatorio ")
            campoNombre.classList.add('is-invalid')
        }else if(campoNombre.value.length < 5){
            errores.push("el campo nombre debe tener al menos 5 caracteres")
            campoNombre.classList.add('is-invalid')

        }else{
            campoNombre.classList.remove('is-invalid');
            campoNombre.classList.add('is-valid');
            campoNombre.focus();
        }
        let campoDescripcion= document.querySelector("input#description");
        if(campoDescripcion.value.length < 20){
            errores.push(" El campo de descripcion debe tener al menos 20 caracteres")
            campoDescripcion.classList.add('is-invalid')
        }else{
            campoDescripcion.classList.remove('is-invalid');
            campoDescripcion.classList.add('is-valid');
            campoDescripcion.focus();
        }
        let campoImagen= document.querySelector("input#image")
       
        
        var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!allowedExtensions.exec(campoImagen.value)){
            errores.push('Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.');
            campoImagen.value = '';
          
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