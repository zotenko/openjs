

const student = {
    name: 'John',
    age: 25,
    // ES5 method
    print: function() {
        // this ia a pointer to it self
        console.log('this', this);
        console.log('this.name', this.name);
        console.log('this.age', this.age);
        console.log('this.print', [this.print]);
    }
}

student.print();

