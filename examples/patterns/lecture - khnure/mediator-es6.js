class Participant {
    constructor(name, chatroom = null) {
        this.name = name;
        this.chatroom = chatroom;
    }

    send(message, to) {
        if (chatroom) {
            this.chatroom.send(message, this, to);
        }
    }

    receive(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

class Chatroom {
    constructor() {
        this.participants = [];
    }

    register(participant) {
        participant.chatroom = this;
        this.participants.push(participant);
    }

    send(message, from, to) {
        if (to) {
            return to.receive(message, from);
        }

        this.participants.forEach((participant) => {
            if (participant === from) {
                return;
            }

            participant.receive(message, from);
        });
    }
}

const igor = new Participant('Igor');
const john = new Participant('John');
const paul = new Participant('Paul');

const chatroom = new Chatroom();
chatroom.register(igor);
chatroom.register(john);
chatroom.register(paul);

igor.send('Hello from Igor');
igor.send('How are you guys?');

john.send('Hello, fine, do you whant to get some beer tonight?', igor);
paul.send('Hello Igor, fine, u?');