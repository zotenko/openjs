


const student = {
    name: 'John',
    age: 20,
    // ES5 style
    _getFemalePrefix: function(maried) {
        return maried ? 'Missis' : 'Miss';
    },
    _getPrefix: function(gender, maried) {
        return gender === 'male' ? 'Mister' : this._getFemalePrefix(maried);
    },
    sayHello: function(personName, gender, maried) {
        let message = 'Hi there! ' + this._getPrefix(gender, maried);

        console.log(message);
    }
}

student.sayHello('Jain', 'female', true);
student.sayHello('Elizabet', 'female', false);


