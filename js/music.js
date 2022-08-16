// Pensar como incorporar imagen de fondo //

class Artista {
    constructor (id, nombre, genero, imagen){
        this.id=id;
        this.nombre=nombre;
        this.genero=genero;
        this.imagen=imagen;
    }
}

let jimi = new Artista (1, "Jimi Hendrix", "Rock", "../css/images/jimi.jpg");
let ray = new Artista (2, "Ray Charles", "R&B", "../css/images/ray.jpg");
let miles = new Artista (3, "Miles Davis", "Jazz", "../css/images/miles.jpg");
let beatles = new Artista (4, "The Beatles", "Rock", "../css/images/beatles.jfif");
let rolling = new Artista (5, "The Rolling Stones", "Rock", "../css/images/rolling.jfif");
let beastie=new Artista (6, "Beastie Boys", "Rap", "../css/images/beastie.webp");
let jamesBrown= new Artista (7,"James Brown", "Soul", "../css/images/James.webp");
let oasis=new Artista (8, "Oasis", "Rock", "../css/images/oasis.webp");
let frank=new Artista (9, "Frank Sinatra", "Swing", "../css/images/frank.webp");
let police=new Artista (10, "The Police", "Rock", "../css/images/The police.jpg");
let soda=new Artista (11, "Soda Stereo", "Rock", "../css/images/miles.jpg");
let daft=new Artista (12, "Daft Punk", "Electro", "../css/images/miles.jpg")
let babasonicos=new Artista (13, "Babasonicos", "Rock", "../css/images/miles.jpg");
let pericos=new Artista (14, "Los Pericos", "Reggae", "../css/images/miles.jpg");
let bob=new Artista (15, "Bob Marley", "Reggae", "../css/images/miles.jpg");


let artistasEscuchados = [];
let artistasRecomendados=[]; 
let artistasTendencia=[];

artistasEscuchados.push (beastie,jamesBrown,oasis,frank,police);
artistasRecomendados.push(jimi, ray, miles, beatles, rolling);
artistasTendencia.push(soda, daft,babasonicos,pericos,bob);

let artistasTodos=artistasEscuchados.concat(artistasRecomendados, artistasTendencia);
