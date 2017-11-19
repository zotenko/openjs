// 'use strict';

{
    function Foo(name) {
        this.name = name;
    }

    let a = new Foo('a');
    let b = new Foo('b');
    
    b.say = function() {
        console.log(this.name);
    }
    
    console.log(a.__proto__ === Foo.prototype); // true
    console.log(a.__proto__ === b.__proto__); // true
}

{
    let unit = {
        x: 0,
        y: 0
    }
    
    let soldier = {
        clipSize: 5
    }

    soldier.__proto__ = unit;

    // console.log(soldier.x);
    // console.log(soldier.y);
    // console.log(soldier.clipSize);

    let rifleman = {};

    rifleman.__proto__ = soldier;

    rifleman.x = 10;
    rifleman.y = 10;
    rifleman.clipSize = 10;

    console.log(rifleman.x, rifleman.y, rifleman.clipSize);
    console.log(soldier.x, soldier.y, soldier.clipSize);
}

{
    let unit = {
        x: 0,
        y: 0
    }
    
    let soldier = Object.create(unit, {
        clipSize: {
            value: 5
        }
    });

    soldier.clipSize = 10;

    console.log(soldier.x); // 0
    console.log(soldier.y); // 0
    console.log(soldier.clipSize); // 5
}

{
    let unit = {
        x: 0,
        y: 0
    }
    
    let soldier = Object.create(unit);

    Object.defineProperty(soldier, 'clipSize', {
        value: 5
    });

    soldier.clipSize = 10; // it will be an error in strict mode

    console.log(soldier.x, soldier.y, soldier.clipSize); // 0 0 5

    Object.defineProperty(soldier, 'range', {
        writable: true,
        value: 250
    });

    soldier.range = 450;

    console.log(soldier.range); // 450
}

{
    let soldierFactory = (proto, rifleType, ammoType) => {
        const boltActionRifleRange = 700;
        const carabineRange = 250;

        let soldier = Object.create(proto);

        Object.defineProperty(soldier, 'range', {
            get() {
                let result;
                result = (rifleType === 'boltAction') ? boltActionRifleRange : carabineRange;
                result *= (ammoType === 'sniperAmmo') ? 1.4 : 1;
                return  result;
            }
        });

        return soldier;
    }

    let soldier1 = soldierFactory({ x: 10, y: 5 });
    let soldier2 = soldierFactory({ x: 25, y: 10 }, 'boltAction');
    let soldier3 = soldierFactory({ x: 25, y: 10 }, 'boltAction', 'sniperAmmo');

    console.log('soldier1', soldier1.range);
    console.log('soldier2', soldier2.range);
    console.log('soldier3', soldier3.range);
}

{
    let unit = Object.create(null);
    unit.position = { x: 0, y: 0 };
    unit.move = function() { /* implementation */ }

    let soldier = Object.create(unit);
    soldier.attack = function() { /* implementation */ }

    let rifleman = Object.create(soldier);
    rifleman.clipSize = 5;
    rifleman.aimTarget = function(target) { /* implementation */ }

    let marine = Object.create(rifleman);
    marine.position.x = 100;
    marine.position.y = 100;

    console.log(unit.position); // { x: 100, y: 100 }
}

{
    let unit = {};

    Object.defineProperties(unit, {
        x: {
            value: 0,
            writable: true,
            enumerable: true
        },
        y: {
            value: 100,
            enumerable: true
        }
    });

    unit.x = 101;
    unit.y = -100;

    console.log(unit); // { x: 101, y: 100 }
}

{
    const unit = { x: 0, y: 0 };

    const soldier = Object.create(unit);

    Object.defineProperty(soldier, 'clipSize', {
            value: 5,
            enumerable: true
        });

    const soldierProto = Object.getPrototypeOf(soldier);

    console.log(soldierProto === unit); // true
}

