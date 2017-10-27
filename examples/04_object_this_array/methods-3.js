

const student = {
    name: 'John',
    age: 20,
    // ES6 style
    _getFemalePrefix(maried) {
        return maried ? 'Missis' : 'Miss';
    },
    _getPrefix(gender, maried) {
        return gender === 'male' ? 'Mister' : this._getFemalePrefix(maried);
    },
    sayHello(personName, gender, maried) {
        let message = 'Hi there! ' + this._getPrefix(gender, maried);

        console.log(message);
    }
}

student.sayHello('Jain', 'female', true);
student.sayHello('Elizabet', 'female', false);

