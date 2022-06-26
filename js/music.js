class Artista {
    constructor (id, nombre, apellido, genero){
        id=this.id;
        nombre=this.nombre;
        apellido=this.apellido;
        genero=this.genero;
    }
}

class Disco extends Artista {
    constructor (nombreDisco, añoDisco, genero) {
        _nombreDisco=this.nombreDisco;
        _añoDisco=this.añoDisco;
        _genero=this.genero
    }
    super (id, nombre, apellido, genero) {
        
    }
}

let discoUno=new Disco ("hola",1973, "blues");

console.log (discoUno._añoDisco);