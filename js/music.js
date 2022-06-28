class Artista {
    constructor (id, nombre, genero){
        this.id=id;
        this.nombre=nombre;
        this.genero=genero;
    }
}

let jimi = new Artista (1, "Jimi Hendrix", "Rock");
let ray = new Artista (2, "Ray Charles", "R&B");
let miles = new Artista (3, "Miles Davis", "Jazz");
let beatles = new Artista (4, "The Beatles", "Rock");
let rolling = new Artista (5, "The rolling stones", "Rock");

let artistasRecomendados =[]

artistasRecomendados.push(jimi, ray, miles, beatles, rolling);

