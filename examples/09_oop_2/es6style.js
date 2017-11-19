
class Unit {
    constructor(x, y) {
        this.position = { x: x, y: y };
        Unit.count +=1;
    }

    static resetCounter() {
        Unit.count = 0;
    }

    move() { console.log('move implementation'); }
}

Unit.count = 0;


class Soldier extends Unit { // pay attention to extends keyword
    constructor(x, y, weaponType) {
        super(x, y); // equivalente of Unit.call(this, x, y);
    }

    move() {
        super.move(); // get parent implementation of move method
        console.log('reimplement move');
    }

    attack() { /* implementation */ }
}

const soldier = new Soldier();
soldier.move();

