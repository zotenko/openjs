



const student = {
    name: 'John',
    age: 20,
    // ES5 style
    sayHello: function(personName, gender, maried) {
        let message = 'Hi there!';
        
        if (gender === 'male') {
            message += ' mr. ';
        } else {
            if (maried) {
                message += ' missis ';
            } else {
                message += ' miss ';
            }
        }

        console.log(message += personName);
    }
}

student.sayHello('Jain', 'female', true);
student.sayHello('Elizabet', 'female', false);



