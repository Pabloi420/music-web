let masEscuchados=document.getElementsByClassName("tusEscuchados");
let recomendados=document.getElementsByClassName("recomendados");
let tendencia=document.getElementsByClassName("tendencia");
let buscador=document.getElementsByClassName("inputBuscador")[0];
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
/*
function crearContenido () {
    let contenido=document.createElement("div");
    document.body.appendChild(contenido)
    let secciones = ["tusEscuchados", "recomendados", "soloHoy", "tendencia"]
    secciones.forEach(e => {
        let section = document.createElement("div");
        let titulo = document.createElement("h2");
        contenido.appendChild(section);
        section.appendChild(titulo);
        section.classList.add ("section");
        section.classList.add (e)
    });
}

buscador.addEventListener("keyup", function(){
    let palabraBuscada=buscador.value;
    let existe=artistasTodos.filter(artista=>artista.nombre===palabraBuscada);
    console.log(existe);
})
*/

//pensar como incorporar imagenes dinamicamentes//

buscador.addEventListener("keyup", function(){
    let palabraBuscada=buscador.value;
    if (palabraBuscada.length>=3) {
        document.getElementById("contenido").remove()
        //que aparezca card usando crear seccion//
    } else {
        
    }
})


// mejorar con un ciclo //
crearSeccion (masEscuchados, artistasEscuchados);
crearSeccion (recomendados, artistasRecomendados);
crearSeccion (tendencia, artistasTendencia);


