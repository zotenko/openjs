

{
    const Unit = function() {
        this.x = 0;
        this.y = 0;
    }

    const Soldier = function() {
        this.clipSize = 5;
    }

    const unit = new Unit();
    const soldier = new Soldier();

    console.log(unit.constructor);
    console.log(soldier.constructor);
    console.log(({}).constructor);
}


{
    const Unit = function () {
        this.x = 0;
        this.y = 0;
    }
    const Soldier = function () {
        Unit.call(this);
        this.clipSize = 5;
    }
    Soldier.prototype = Object.create(Unit.prototype);

    const unit = new Unit();
    const soldier = new Soldier();

    // console.log(unit instanceof Unit); // true
    // console.log(unit instanceof Soldier); // false
    // console.log(soldier instanceof Soldier); // true
    // console.log(soldier instanceof Unit); //true

    console.log(unit instanceof Object); // true
    console.log(soldier instanceof Object); // true
    console.log({} instanceof Object); // true
    console.log([] instanceof Object); // true
    console.log((() => { }) instanceof Object); // true
}



