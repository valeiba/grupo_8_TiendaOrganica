window.onload = function(){
    let formularioLogin= document.querySelector("form#form");
    formularioLogin.addEventListener("submit",function(event){
        let errores=[]
        let campoEmail=document.querySelector("input#email")
        let emailValido= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(campoEmail.value === ""){
            errores.push("El Email es obligatorio")
            campoEmail.classList.add('is-invalid', "animation-shake");
        }else if(!emailValido.test(campoEmail.value)){
            errores.push("El Email ingresado es inválido")
            campoEmail.classList.add('is-invalid', "animation-shake");
        }else{
            campoEmail.classList.remove('is-invalid');
            campoEmail.classList.add('is-valid');
            campoEmail.focus();
        }
        let campoContraseña=document.querySelector("input#password");
        if(campoContraseña.value===""){
            errores.push("La Contraseña es obligatoria")
            campoContraseña.classList.add('is-invalid', "animation-shake");
        }else{
            campoContraseña.classList.remove('is-invalid');
            campoContraseña.classList.add('is-valid');
            campoContraseña.focus();
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
