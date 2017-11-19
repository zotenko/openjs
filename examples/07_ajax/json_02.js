
const address = {
    street: 'Tsentralnaya',
    city: 'Kharkiv',
    country: 'Ukraine'
}

const person1 = {
    name: 'John',
    age: 25,
    address: address
}

const person2 = Object.create(person1);

console.log(JSON.stringify(person2)); // {}


