let ingresar=document.getElementsByClassName("enlaceIngresar")[0];
let usuario=document.getElementsByClassName("inputUsuario");
let contraseña=document.getElementsByClassName("inputContraseña");

ingresar.addEventListener("click", function(){
    allClients.forEach(e => {
        if (usuario[0].value==e.user&&contraseña[0].value==e.password) {
            //habilita ingreso//
            alert("Ingresa")
        } else {
            //no habilita ingreso//
            alert("No ingresa")
        }
    });
    }
)