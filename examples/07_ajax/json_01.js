
const person = {
    name: 'John',
    age: 25,
    sex: 'male'
};

const strPerson = JSON.stringify(person);

console.log(strPerson); // '{"name":"John","age":25,"sex":"male"}'
console.log(typeof strPerson); // 'string'

const parsedPerson = JSON.parse(strPerson);

console.log(person === parsedPerson); // false

