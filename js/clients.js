class Clients {
    constructor(id, user, password) {
        this.id = id;
        this.user = user;
        this.password = password;
    }
}

clientUno= new Clients (45,"hola", "chau");

console.log(clientUno)