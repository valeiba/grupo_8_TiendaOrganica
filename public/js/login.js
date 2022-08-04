window.onload = function(){
    let formularioLogin= document.querySelector("form#form");
    formularioLogin.addEventListener("submit",function(event){
        let errores=[]
        let campoEmail=document.querySelector("input#email")
        let emailValido= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
        if(campoEmail.value === ""){
            errores.push("el campo email es obligatorio")

        }else if(!emailValido.test(campoEmail.value)){
            errores.push("El Email ingresado es invalído")
            
        }
        let campoContraseña=document.querySelector("input#password");
        if(campoContraseña.value===""){
            errores.push("el campo de contraseña es obligatorio")
        }
        if (errores.length>0){
            event.preventDefault();
            let ulErrores=document.querySelector('div.errores ul');
            errores.forEach(error=>{
                ulErrores.innerHTML+= `<li> ${error} </li>`
            })
           }
    })}
