
var Participant = function(name) {
    this.name = name;
    this.chatroom = null;
}
Participant.prototype.send = function(message, to) {
    this.chatroom.send(message, this, to);
}
Participant.prototype.receive = function(message, from) {
    console.log(from.name + ' to ' + this.name + ': ' + message);
}

var Chatroom = function() {
    var participants = [];

    this.register = function(participant) {
        participant.chatroom = this;
        participants.push(participant);
    }

    this.send = function(message, from, to) {
        // personal message
        if (to) { return to.receive(message, from); }

        // broadcast to all participants
        participants.forEach(function(participant) {
            if (participant !== from) { participant.receive(message, from); }
        });
    }
}

var igor = new Participant('Igor');
var john = new Participant('John');
var paul = new Participant("Paul");

var chatroom = new Chatroom();
chatroom.register(igor);
chatroom.register(john);
chatroom.register(paul);

igor.send('Hello from Igor');
igor.send('How are you guys?');

john.send('Hello, fine, do you whant to get some beer tonight?', igor);
paul.send('Hello Igor, fine, u?');