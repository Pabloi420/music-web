let ingresar=document.getElementsByClassName("enlaceIngresar")[0];
let usuario=document.getElementsByClassName("inputUsuario");
let boxIngreso=document.getElementsByClassName("boxIngreso");
let contraseña=document.getElementsByClassName("inputContraseña");
let ultimoUsuario = localStorage.getItem ('ultimoUsuario');
let ingreso=false

//corroborar usuario y contraseña//
ingresar.addEventListener("click", function(){
    allClients.forEach(e => {
        if (ingreso==false) {
            if (usuario[0].value==e.user&&contraseña[0].value==e.password) {    
                localStorage.setItem("ultimoUsuario", usuario[0].value);
                ingreso=true;
            } 
        }
    });
    //usar ternario para practicar//
    if (ingreso==true) {
        ingresar.setAttribute("href", "./menu.html")
    } else {
        ingresar.removeAttribute("href", "./index.html")
        mensajeError=document.createElement("h3");
        mensajeError.innerText="Usuario y/o contraseña incorrecto";
        boxIngreso[0].appendChild(mensajeError)
    }
  
    }
)


/* si el usuario en storage no existe da bienvenida sino lo incorpora como valor en el input 
y genera un boton indicando la posibilidad que no seas dicho usuario para vaciar el storage
*/

if (!ultimoUsuario) {
    let bienvenida=document.createElement("h3");
    bienvenida.innerText="Bienvenido!!";
    boxIngreso[0].appendChild(bienvenida);
} else {
    usuario[0].value=ultimoUsuario;
    let btnUsuario=document.createElement("a");
    btnUsuario.classList.add ("enlaceIngresar");
    btnUsuario.setAttribute("href", "./index.html")
    let pbtnUsuario=document.createElement("p");
    pbtnUsuario.classList.add("Ingresar");
    boxIngreso[0].appendChild(btnUsuario);
    btnUsuario.appendChild(pbtnUsuario);
    pbtnUsuario.innerText="No soy " + ultimoUsuario;
    btnUsuario.addEventListener("click", function () {
        localStorage.removeItem("ultimoUsuario");   
        usuario[0].value=ultimoUsuario
    })
}
