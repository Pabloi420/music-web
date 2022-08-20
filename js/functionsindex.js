let ingresar=document.getElementsByClassName("enlaceIngresar")[0];
let usuario=document.getElementsByClassName("inputUsuario");
let boxIngreso=document.getElementsByClassName("boxIngreso");
let contraseña=document.getElementsByClassName("inputContraseña");
let ultimoUsuario = localStorage.getItem ('ultimoUsuario');

//corroborar usuario y contraseña//
ingresar.addEventListener("click", function(){
    allClients.forEach(e => {
        console.log(usuario[0].value)
        if (usuario[0].value==e.user&&contraseña[0].value==e.password) {    
            localStorage.setItem("ultimoUsuario", usuario[0].value);
            alert ("Permitir ingreso");
        } else {
            alert("No permitir ingreso")
        }
    });
    }
)

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
    })
}
