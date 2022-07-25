let usuario=document.getElementsByClassName("inputUsuario");
let contraseña=document.getElementById("inputContraseña");
let ingresar=document.getElementsByClassName("enlaceIngresar")[0];
let zonaIngresar=document.getElementsByClassName("zonaIngresar");
let usuarioValor;
let contraseñaValor;
let recomendados=document.getElementsByClassName("recomendados")

/*
artistasRecomendados.forEach(e => {
    let card=document.createElement("div");
    recomendados[0].appendChild(card);
    let nombre=document.createElement("p");
    let genero=document.createElement("p");
    card.appendChild(nombre);
    card.appendChild(genero);
    card.classList.add("card");
    nombre.innerText=e.nombre;
    genero.innerText=e.genero;
    nombre.classList.add("card-title");
    genero.classList.add("card-genre");
});
*/
ingresar.addEventListener("click", function(){
    console.log(usuario[0].value)
    allClients.forEach(e => {
        if (usuario[0].value==e.user) {
            console.log("Ingresa")
        } else {
            console.log("no ingresa")
        }
    });
    }
)
/*
&&contraseña==e.password
*/