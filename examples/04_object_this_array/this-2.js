

// let student = {};

// student.name = 'John';
// student.age = 20;
// student.print = function() {
//     console.log('this', this);
//     console.log('this.name', this.name);
//     console.log('this.age', this.age);
//     console.log('this.print', [this.print]);
// }

// student.print();


let student = {};

student.name = 'John';
student.age = 20;
student.print = () => {
    console.log('this', this);
    console.log('this.name', this.name);
    console.log('this.age', this.age);
    console.log('this.print', [this.print]);
}

student.print();


