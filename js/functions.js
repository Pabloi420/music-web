let usuario=document.getElementById("inputUsuario");
let contraseña=document.getElementById("inputContraseña");
let ingresar=document.getElementById("botoningresar");
let zonaIngresar=document.getElementsByClassName("zonaIngresar");
let usuarioValor;
let contraseñaValor;

usuario.addEventListener("keyup", function(){
    usuarioValor=usuario.value;
})


contraseña.addEventListener("keyup", function(){
    contraseñaValor=contraseña.value;
})

ingresar.addEventListener("click", function(){
    allClients.forEach(e => {
        if (e.user==usuarioValor&&e.password==contraseñaValor) {
            console.log("hola")
        } else {
            console.log("chau")
        }
    });
})

/*

        if (usuarioValor==e.usuarioValor&&contraseña==e.usuarioValor) {
            console.log("hola")
        } else {
            let usuarioIncorrecto=document.createElement("p");
            zonaIngresar[0].appendChild(usuarioIncorrecto);
            usuarioIncorrecto.innerText("hola")
            */
           