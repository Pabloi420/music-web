let masEscuchados=document.getElementsByClassName("tusEscuchados");
let recomendados=document.getElementsByClassName("recomendados");
let tendencia=document.getElementsByClassName("tendencia");
let buscador=document.getElementsByClassName("inputBuscador")[0];
let seccion=document.getElementsByClassName("section");
let contenido=document.getElementById("contenido")

function crearContenido (){
    let secciones = ["tusEscuchados", "recomendados", "soloHoy", "tendencia"]
    let titulos=["Los que mas escuchas","Tus recomendados", "Recomendación del dia", "Tendencia"]
    secciones.forEach((e, indice) => {
        let section = document.createElement("div");
        let titulo = document.createElement("h2");
        contenido.appendChild(section);
        section.appendChild(titulo);
        section.classList.add ("section");
        section.classList.add (e);
        titulo.classList.add("separador");
        titulo.innerHTML=titulos[indice]
    });
}

window.addEventListener(onload, crearContenido())

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
        imagen.setAttribute("src", e.imagen)
        imagen.classList.add("imagen-card");
    })
}

buscador.addEventListener("keyup", function(){
    for (const artista of artistasTodos) {
        if (artista.nombre.toLowerCase().includes(buscador.value.toLowerCase())){
            //remover contenido y generar cards de quien se busca
        } 
    }
})


// mejorar con un ciclo //
crearSeccion (masEscuchados, artistasEscuchados);
crearSeccion (recomendados, artistasRecomendados);
crearSeccion (tendencia, artistasTendencia);


