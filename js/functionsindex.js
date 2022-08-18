let ingresar=document.getElementsByClassName("enlaceIngresar")[0];
let usuario=document.getElementsByClassName("inputUsuario")[0];
let boxIngreso=document.getElementsByClassName("boxIngreso");
let contraseña=document.getElementsByClassName("inputContraseña");


//corroborar usuario y contraseña//
ingresar.addEventListener("click", function(){
    allClients.forEach(e => {
        if (usuario[0].value==e.user&&contraseña[0].value==e.password) {
            ingresar.classList.remove("disabled");
            alert ("Ingresa")
        } else {
            ingresar.classList.add("disabled");
            alert("No ingresa")
        }
    });
    }
)

//uso de storage para traer datos dentro de input, fijarse que el set item tome el valor del ultimo usuario que ingreso//

let ultimoUsuario = localStorage.getItem ('ultimoUsuario');
if (!ultimoUsuario) {
    let bienvenida=document.createElement("h3");
    bienvenida.innerText="Bienvenido!!";
    boxIngreso[0].appendChild(bienvenida);
    localStorage.setItem("ultimoUsuario", "Pablo");
} else {
    let bienvenida=document.createElement("h3");
    usuario.value=ultimoUsuario;
    let btnUsuario=document.createElement("a");
    btnUsuario.classList.add ("enlaceIngresar");
    btnUsuario.setAttribute("href", "./index.html")
    let pbtnUsuario=document.createElement("p");
    pbtnUsuario.classList.add("Ingresar");
    boxIngreso[0].appendChild(btnUsuario);
    btnUsuario.appendChild(pbtnUsuario);
    pbtnUsuario.innerText="No soy " + ultimoUsuario;
    localStorage.removeItem("ultimoUsuario"); 
}