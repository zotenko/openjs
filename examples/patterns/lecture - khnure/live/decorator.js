class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    say() {
        console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
    }
}

class DecoratedUser {
    constructor(user, city, street) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.city = city;
        this.street = street;

        this.say = user.say.bind(user);
    }

    decoratedSay() {
        console.log(`Hello my name is ${this.firstName} ${this.lastName}. 
        I'm from ${this.city}, ${this.street}`);
    }
}

const decoratedUser = new DecoratedUser(new User('John', 'Doe'), 'Kharkiv', 'Sumska');
decoratedUser.decoratedSay();



