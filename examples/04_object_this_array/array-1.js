let name = 'John';

let persons = [
    { name: 'Marina', age: 22 },
    { name: 'John', age: 20 },
    { name: 'Alex', age: 40 },
    { name: 'Igor', age: 29 }
];

{
    let fruits = ['apple', 'prear', 'orange'];
    fruits.push('banana'); // ['apple', 'prear', 'orange', 'banana']
}

{
    let fruits = ['apple', 'prear', 'orange'];
    fruits.unshift('banana'); // ['banana', 'apple', 'prear', 'orange']
}

{
    let fruits = ['apple', 'prear', 'orange'];
    console.log(fruits.pop('banana')); // 'orange'
    console.log(fruits); // ['apple', 'prear']
}

{
    let fruits = ['apple', 'prear', 'orange'];
    console.log(fruits.shift()); // 'apple'
    console.log(fruits); // ['prear', 'orange']
}

{
    let persons = [
        { name: 'Marina', age: 22 },
        { name: 'John', age: 20 },
        { name: 'Alex', age: 40 },
        { name: 'Igor', age: 29 }
    ];

    let data = persons.forEach((person, index, source) => {
        console.log('person', person);
        console.log('index', index);
        console.log('source', source);
    });
}

{
    let fruits = ['apple', 'prear', 'orange'];
    let underscoredFruits = fruits.map(fruit => `__${fruit}`);
    // ["__apple", "__prear", "__orange"]
    console.log(underscoredFruits);
}

{
    // I

    // let filled = new Array(10);

    // filled.fill(0);

    // filled.map(() => {
    //     console.log('map');
    // })

    // console.log(filled); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    let filled = new Array(10).fill({});

    filled[0].name = 'John'

    console.log(filled);
}

{
    let name = 'John';
    let splitedName = name.split('');
    let reversedName = splitedName.reverse();
    console.log(reversedName); // ["n", "h", "o", "J"]
}

{
    let splitedName = name.split('');
    let sortedName = splitedName.sort();
    console.log(sortedName); // ["J", "h", "n", "o"]
}

{
    let persons = [
        { name: 'Marina', age: 22 },
        { name: 'John', age: 20 },
        { name: 'Alex', age: 40 },
        { name: 'Igor', age: 29 }
    ];

    let sortedByName = persons.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }

        if (a.name < b.name) {
            return -1;
        }

        // equal
        return 0;
    });

    console.log(sortedByName);

    // wzhoh...
    let sortedByAge = persons.sort((a, b) => a.age - b.age);
    // vise versa
    let sortedByAgeViceVersa = persons.sort((a, b) => b.age - a.age);
}

{
    let fruits = ['apple', 'prear', 'orange', 'plum', 'lemon'];

    // Be aware! splice mutate source array!
    fruits.splice(fruits.indexOf('prear'), 1); // ['apple', 'orange', 'plum', 'lemon'];
    fruits.splice(fruits.indexOf('orange'), 1); // ['apple', 'plum', 'lemon'];
}

{
    let fruits = ['apple', 'prear', 'orange'];
    let vegetables = ['cabage', 'onion', 'cucumber'];

    console.log([].concat(fruits, vegetables));
    // ["apple", "prear", "orange", "cabage", "onion", "cucumber"]
}

{
    let fruits = ['prear', 'apple', 'prear', 'orange', 'prear', 'prear'];
    console.log(fruits.indexOf('prear', 1)); // 0
}

{
    let fruits = ['prear', 'apple', 'prear', 'orange', 'prear', 'prear'];
    console.log(fruits.lastIndexOf('prear')); // 5
}

{
    let fruits = ['prear', 'apple', 'prear', 'orange', 'prear', 'prear'];
    console.log(fruits.slice(1, 4)); //["apple", "prear", "orange"]
    // .slice doesn't mutate a source array
    console.log(fruits); // ['prear', 'apple', 'prear', 'orange', 'prear', 'prear'];
}

{
    let fruits = ['prear', 'apple', 'prear', 'orange', 'prear', 'prear'];
    console.log(fruits.toString()) // "prear,apple,prear,orange,prear,prear"
}

{
    // every and some

    let allAdult = persons.every(person => person.age >= 18);
    console.log(allAdult); // true

    let copiedPersons = JSON.parse(JSON.stringify(persons));

    copiedPersons[0].age = 16;

    allAdult = persons.every(person => person.age >= 18);
    console.log(allAdult); // false

    let hasChildren = copiedPersons.some(person => person.age < 18);
    console.log('hasChildren', hasChildren); //true
}

{
    let copiedPersons = JSON.parse(JSON.stringify(persons));
    copiedPersons[0].age = 16;
    copiedPersons[1].age = 17;

    let adults = copiedPersons.filter(person => person.age >= 18);
    console.log(copiedPersons); // 4 persons
    console.log(adults); // 2 persons
}

{
    // Object {name: "John", age: 20}
    console.log(persons.find(person => person.name === 'John'));
    console.log(persons.findIndex(person => person.name === 'John')); // 3
}



{
    let persons = [
        { name: 'Marina', age: 22 },
        { name: 'John', age: 20 },
        { name: 'Alex', age: 40 },
        { name: 'Igor', age: 29 }
    ];

    let totalAge = persons.reduce((accumulator, person) => {
        console.log(accumulator, person);
        // By default accumulator is a first element of array
        // preson is a second
        return accumulator + person.age;
    }, 0);
    console.log('totalAge', totalAge / persons.length)
}

{
    let fruits = ['apple', 'prear', 'orange'];

    let reduce = fruits.reduce((accumulator, value) => `${accumulator}${value}`, '');
    let reduceRight = fruits.reduceRight((accumulator, value) => `${accumulator}${value}`, '');

    console.log(reduce); // appleprearorange
    console.log(reduceRight); // orangeprearapple
}