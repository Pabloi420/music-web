class Clients {
    constructor(id, user, password) {
        this.id = id;
        this.user = user;
        this.password = password;
    }
}

allClients=[];

clientOne = new Clients (1,"Jose", "Jose1");
clientTwo = new Clients (2,"Eduardo", "Eduardo1");
clientThree = new Clients (3,"Julia", "Julia1");

allClients.push(clientOne,clientTwo,clientThree);




