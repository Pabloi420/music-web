// Pensar como incorporar imagen de fondo //

class Artista {
    constructor (id, nombre, genero, imagen){
        this.id=id;
        this.nombre=nombre;
        this.genero=genero;
        this.imagen=imagen;
    }
}

let jimi = new Artista (1, "Jimi Hendrix", "Rock", "../css/images/miles.jpg");
let ray = new Artista (2, "Ray Charles", "R&B");
let miles = new Artista (3, "Miles Davis", "Jazz");
let beatles = new Artista (4, "The Beatles", "Rock");
let rolling = new Artista (5, "The Rolling Stones", "Rock");
let beastie=new Artista (6, "Beastie Boys", "Rap");
let jamesBrown= new Artista (7,"James Brown", "Soul");
let oasis=new Artista (8, "Oasis", "Rock");
let frank=new Artista (9, "Frank Sinatra", "Swing");
let police=new Artista (10, "The Police", "Rock");
let soda=new Artista (11, "Soda Stereo", "Rock");
let daft=new Artista (12, "Daft Punk", "Electro")
let babasonicos=new Artista (13, "Babasonicos", "Rock");
let pericos=new Artista (14, "Los Pericos", "Reggae");
let bob=new Artista (15, "Bob Marley", "Reggae");


let artistasEscuchados = [];
let artistasRecomendados=[]; 
let artistasTendencia=[];

artistasEscuchados.push (beastie,jamesBrown,oasis,frank,police);
artistasRecomendados.push(jimi, ray, miles, beatles, rolling);
artistasTendencia.push(soda, daft,babasonicos,pericos,bob);

let artistasTodos=artistasEscuchados.concat(artistasRecomendados, artistasTendencia);
