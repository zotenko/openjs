

{
    const Unit = function(x, y) {
        this.position = {x: x, y: y};
    }
    Unit.prototype.move = function() {
        this.position.x += 1;
        this.position.y += 1;
    
        console.log(`My position is: x - ${this.position.x}; y - ${this.position.y};`);
    }
    
    const soldier1 = new Unit(0, 0);
    const soldier2 = new Unit(10, 10);

    console.log(soldier1.__proto__ === Unit.prototype); // true
    console.log(soldier1.__proto__ === soldier2.__proto__); // true
}

{
    const Unit = function(x, y) {
        this.position = {x: x, y: y};
        Unit.count += 1;
    }
    Unit.prototype.move = function() {
        this.position.x += 1;
        this.position.y += 1;
    
        console.log(`My position is: x - ${this.position.x}; y - ${this.position.y};`);
    }

    Unit.count = 0;

    const Soldier = function(x, y, weaponType) {
        Unit.call(this); // call parent constructor
    }

    // CREATE prototype object base on prototype of the parent
    Soldier.prototype = Object.create(Unit.prototype);
    Soldier.prototype.aim = function() {
        console.log('I\'m aiming...');
    }
    Soldier.prototype.attack = function() {
        console.log('pew');
    }

    const soldier1 = new Soldier(0, 0, 'carabine');
    const soldier2 = new Soldier(10, 10, 'shotgun');
    const soldier3 = new Soldier(15, 15, 'boltActionRifle');

    console.log(Unit.count);
}

{
    const Unit = function(x, y) {
        this.position = {x: x, y: y};
        Unit.count += 1;
    }
    Unit.prototype.move = function() {
        this.position.x += 1;
        this.position.y += 1;
    
        console.log(`My position is: x - ${this.position.x}; y - ${this.position.y};`);
    }

    Unit.count = 0;

    const Soldier = function(x, y, weaponType) { Unit.call(this); }

    // CREATE prototype object base on prototype of the parent
    Soldier.prototype = Object.create(Unit.prototype);
    Soldier.prototype.aim = function() { /* Implementation */ }
    Soldier.prototype.attack = function() { /* Implementation */ }

    const soldier1 = new Soldier(0, 0, 'carabine');
    const soldier2 = new Soldier(10, 10, 'shotgun');
    const soldier3 = new Soldier(15, 15, 'boltActionRifle');

    console.log(Unit.count); // 3
}

{
    // ES6

    class Unit {
        constructor(x, y) {
            this.position = { x: 0, y: 0 };
        }

        move() { /* implementation */ }
    }

    class Soldier extends Unit {
        static carabineRange = 250;
        static boltActionRifleRange = 700;
        static sniperAmmoRangeIndxe = 1.4;

        constructor(x, y, weaponType, ammoType) {
            super(); // equivalent to Unit.call(this);
            this.weaponType = weaponType;
            this.ammoType = ammoType;
        }

        get range() {
            let result = 0;

            result = (this.rifleType === 'boltAction') ? Soldier.boltActionRifleRange : SoldiercarabineRange;
            result *= (ammoType === 'sniperAmmo') ? Soldier.sniperAmmoRangeIndxe : 1;
        }

        aim() { /* implementation */ }

        attack() { /* implementation */ }
    }

    const soldier = new Soldier();

    console.log(soldier.range);
}


// let soldierFactory = (proto, rifleType, ammoType) => {
//     const boltActionRifleRange = 700;
//     const carabineRange = 250;

//     let soldier = Object.create(proto);

//     Object.defineProperty(soldier, 'range', {
//         get() {
//             let result;
//             result = (rifleType === 'boltAction') ? boltActionRifleRange : carabineRange;
//             result *= (ammoType === 'sniperAmmo') ? 1.4 : 1;
//             return  result;
//         }
//     });

//     return soldier;
// }