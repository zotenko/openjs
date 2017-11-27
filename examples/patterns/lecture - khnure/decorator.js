
var User = function(name) {
    this.name = name;
    
    this.getGreetingMessage = function() {
        return 'Hi my name is ' + this.name + '.';
    }

    this.sayHi = function() {
        console.log(this.getGreetingMessage());
    }
}

var DecoratedUser = function(user, city, street) {
    this.user = user;
    this.name = user.name;
    this.city = city;
    this.street = street;

    this.getGreetingMessage = function() {
        var greetingMessage = this.user.getGreetingMessage();
        var decoratedGreetingMessage = greetingMessage
        + ' '
        + 'My address is ' + this.city + ', ' + this.street + ' street';

        return decoratedGreetingMessage;
    }

    this.sayHi = this.user.sayHi.bind(this);
}

var user = new User('Igor');
var decoratedUser = new DecoratedUser(user, 'Kharkiv', 'Sumska');

user.sayHi();
decoratedUser.sayHi();