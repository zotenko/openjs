

let student = {
    name: 'John',
    age: 20,
    // ES6 style
    print() { // we don't use key word 'function' anymore
        // this is a pointer to it self
        console.log('this', this);
        console.log('this.name', this.name);
        console.log('this.age', this.age);
        console.log('this.print', [this.print]);
    }
};

student.print();




