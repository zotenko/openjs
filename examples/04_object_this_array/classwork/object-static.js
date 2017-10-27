{
    let unit = {
        health: 100
    }

    let soldier = Object.create(
        unit, 
        { 
            ammo: {
                enumerable: true,
                configurable: true,
                writable: true,
                value: 10 
            } 
        }
    );

    console.log('Object.create soldier:');
    console.log('health', soldier.health);
    console.log('ammo', soldier.ammo);
}

{
    let person = {
        firstName: 'John',
        secondName: 'Doe'
    };

    let extendedPerson = Object.assign({}, person, { address: 'Kharkiv, st. Sumska' }, { firstName: 'TEST' });

    console.log('Object.assing extendedPerson:');
    console.log(extendedPerson);
}

{
    let person = {
        firstName: 'Lilu',
        secondName: 'Dallas'
    };

    Object.defineProperty(person, 'age', {
        enumerable: false,
        configurable: true,
        writable: false,
        value: 18
    });

    console.log('Object.defineProperty person');
    console.log(person);

    person.age = 31;

    console.log(person.age);
}

{
    // We will get the same result as above

    let person = {
        firstName: 'Lilu',
        secondName: 'Dallas'
    };

    Object.defineProperty(person, 'age', {
        configurable: true,
        value: 18
    });

    console.log('Object.defineProperty person');
    console.log(person);
    console.log(person.age);
}

{
    let person = {
        firstName: 'Lilu',
        secondName: 'Dallas',
        address: {
            city: 'Kharkiv',
        }
    };

    Object.freeze(person);

    person.name = 'John';
    person.address.city = 'New York'

    console.log(person);
    console.log('Is frozen', Object.isFrozen(person));
}

{
    let person = {
        firstName: 'Lilu',
        secondName: 'Dallas',
        address: {
            city: 'Kharkiv',
        }
    };

    Object.freeze(person);

    person.name = 'John';
    person.address.city = 'New York'

    console.log(person);
    console.log('Is frozen', Object.isFrozen(person));
}

{
    let unit = {
        health: 100,
        fire() {
            console.log('pew pew');
        }
    }

    let soldier = Object.create(unit, { ammo: { value: 10, enumerable: true } });

    console.log('for...in');
    for (let key in soldier) {
        console.log(key, soldier[key]);
    }

    console.log('\nObject.hasOwnProperty');
    for (let key in soldier) {
        if (soldier.hasOwnProperty(key)) {
            console.log(key, soldier[key]);
        }
    }
}

{
    let unit = {
        health: 100,
        fire() {
            console.log('pew pew');
        }
    }

    let soldier = Object.create(unit, { ammo: { value: 10, enumerable: true } });

    Object.keys(soldier).forEach((key) => {
        console.log(key, soldier[key]);
    });
}

{
    let unit = {
        health: 100,
        fire() {
            console.log('pew pew');
        }
    }

    let soldier = Object.create(unit, { ammo: { value: 10, enumerable: true } });

    console.log(Object.values(soldier));
}