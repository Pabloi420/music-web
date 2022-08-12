let masEscuchados=document.getElementsByClassName("tusEscuchados");
let recomendados=document.getElementsByClassName("recomendados");
let tendencia=document.getElementsByClassName("tendencia");
let buscador=document.getElementsByClassName("inputBuscador")[0];
let contenido=document.getElementById("contenido");
let seccion=document.getElementsByClassName("section");


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
        let imagen=document.createElement("img");
        card.appendChild(imagen);
        console.log(typeof(e.imagen))
        imagen.setAttribute("src", e.imagen)
        imagen.classList.add("imagen-card");
    })
}



//pensar como incorporar imagenes dinamicamentes//
buscador.addEventListener("keyup", function(){
    let palabraBuscada=buscador.value;
    if (palabraBuscada.length>=3) {
        //remover nodos//
        //que aparezca card usando crear seccion//
    } else {
        console.log ("vuelve menu original")
    }
    for (const artista of artistasEscuchados) {
        if (artista.nombre==palabraBuscada) {
            //debe aparecer busqueda o mensaje de que no//
            console.log("hola")
        }
    }
})


// mejorar con un ciclo //
crearSeccion (masEscuchados, artistasEscuchados);
crearSeccion (recomendados, artistasRecomendados);
crearSeccion (tendencia, artistasTendencia);


