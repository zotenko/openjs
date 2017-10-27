

const person = {
    name: 'John',
    age: 25,
    sex: 'male',
    address: {
        country: 'Ukraine',
        city: 'Kharkiv',
        street: 'Sumska'
    }
};

// const { name, age, sex, address } = person;

// console.log(name, age, sex, address);

/* *************************************** */

const { 
    name: personName, 
    age: personAge, 
    sex: personSex, 
    address: personAddress 
} = person;

console.log('name', personName);
console.log('age', personAge);
console.log('sex', personSex);
console.log('address', personAddress);


const arr = ['one', 'two', 'three', 'four', 'five', 'six'];

const [one, two, ...other] = arr;

console.log(one);
console.log(two);
console.log(other);

// const [one, two, ...other] = arr;

// console.log(one);
// console.log(two);
// cosnole.log(other);



const fruits = ['applle', 'banana', 'kiwi', 'pear'];
const [apple, banana, ...other] = fruits;

console.log(apple, banana, other);