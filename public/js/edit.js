window.onload = function(){
    let formulario= document.querySelector('form.main-form');
    formulario.addEventListener("submit",function(event){
        let errores=[]
        let campoNombre= document.querySelector("input#name");
        if(campoNombre.value === ""){
            errores.push("El campo nombre es obligatorio ")
        }else if(campoNombre.value.length < 5){
            errores.push("el campo nombre debe tener al menos 5 caracteres")

        }
        let campoDescripcion= document.querySelector("input#description");
        if(campoDescripcion.value.length < 20){
            errores.push(" El campo de descripcion debe tener al menos 20 caracteres")
        }
        let campoImagen= document.querySelector("input#image")
       
        
        var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!allowedExtensions.exec(campoImagen.value)){
            errores.push('Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.');
            campoImagen.value = '';
          
        }
   if (errores.length>0){
    event.preventDefault();
    let ulErrores=document.querySelector('div.errores ul');
    errores.forEach(error=>{
        ulErrores.innerHTML+= `<li> ${error} </li>`
    })
   }
       
    })
}
