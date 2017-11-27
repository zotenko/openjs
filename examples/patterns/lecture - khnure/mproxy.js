class Connection {
    constructor(to, from) {
        this.to = to;
        this.from = from;
    }

    connect() {
        console.log(`I'm tring connect from: ${this.from} to ${this.to}`);
    }
}

class ConnectionProxy {
    constructor(to, from) {
        this.from = 'proxy';
        this.connection = new Connection(to, this.from);
    }

    connect() {
        this.connection.connect();
    }
}

let connection = new ConnectionProxy('google', 'my computer');

connection.connect();