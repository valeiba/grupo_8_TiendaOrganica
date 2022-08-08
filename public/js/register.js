window.onload = function(){
    let formularioRegister= document.querySelector('form#form');
   formularioRegister.addEventListener("submit",function(event){
   
        let errores=[]
        
        let campoNombre=document.querySelector("input#first_name");
       
        if(campoNombre.value=== ""){
            errores.push("el campo de nombre es obligatorio")
        } else if(campoNombre.value.length<2){
            errores.push("el nombre debe tener al menos 2 caracteres")
        }
        let campoApellido=document.querySelector("input#last_name")
        if(campoApellido.value=== ""){
            errores.push("el campo de apellido es obligatorio")
        } else if(campoApellido.value.length<2){
            errores.push("el apellido debe tener al menos 2 caracteres")
        }
        let campoEmail=document.querySelector("input#email")
        let emailValido= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(campoEmail.value === ""){
            errores.push("el campo email es obligatorio")

        }else if(!emailValido.test(campoEmail.value)){
            errores.push("El Email ingresado es invalído")
            
        }
        let campoContraseña=document.querySelector("input#password");
        if(campoContraseña.value===""){
            errores.push("el campo de contraseña es obligatorio")
        }else if(campoContraseña.value.length<8){
            errores.push("la contraseña debe tener al menos 8 caracteres")
        }

        let campoAvatar= document.querySelector("input#avatar")
       
        
        var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!allowedExtensions.exec(campoAvatar.value)){
            errores.push('Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.');
            campoAvatar.value = '';
          
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


        
    })}