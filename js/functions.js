let usuario=document.getElementsByClassName("inputUsuario");
let contraseña=document.getElementsByClassName("inputContraseña");
let ingresar=document.getElementsByClassName("enlaceIngresar")[0];
let masEscuchados=document.getElementsByClassName("tusEscuchados");
let recomendados=document.getElementsByClassName("recomendados");
let tendencia=document.getElementsByClassName("tendencia");
let buscador=document.getElementsByClassName("inputBuscador")[0];

//pensar como incorporar imagenes dinamicamentes//
buscador.addEventListener("keyup", function(){
    console.log(buscador.value)
})

function crearSeccion (seccion, artistas) {
    artistas.forEach(e => {
        let card=document.createElement("div");
        seccion[0].appendChild(card);
        let nombre=document.createElement("p");
        let genero=document.createElement("p");
        card.appendChild(nombre);
        card.appendChild(genero);
        card.classList.add("card");
        nombre.innerText=e.nombre;
        genero.innerText=e.genero;
        nombre.classList.add("card-title");
        genero.classList.add("card-genre");
    })
}

// mejorar con un ciclo //
crearSeccion (masEscuchados, artistasEscuchados);
crearSeccion (recomendados, artistasRecomendados);
crearSeccion (tendencia, artistasTendencia);

ingresar.addEventListener("click", function(){
    console.log(usuario[0].value)
    console.log(contraseña[0].value)
    allClients.forEach(e => {
        if (usuario[0].value==e.user&&contraseña[0].value==e.password) {
            //habilita ingreso//
            console.log("Ingresa")
        } else {
            //no habilita ingreso//
            console.log("no ingresa")
        }
    });
    }
)

