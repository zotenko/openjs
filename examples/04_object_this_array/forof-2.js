
const person = {
    name: 'John',
    age: 20,
    sex: 'male',
    phone: '+380111111111',
    email: 'john@gmail.com',
    [Symbol.iterator]() {
        
        return this;
    }
};

for(let key of person) {
    // use brackets notation
    // for access to property via variable
    console.log(person[key]);
}