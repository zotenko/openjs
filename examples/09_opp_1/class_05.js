
var Unit = function(x, y, health) {
    var position = { x: x, y: y };

    this.move = function() {
        position.x += 1;
        position.y += 1;

        console.log('I was moved.', 'My position is: x - ' + position.x + '; y - ' + position.y + ';');
    }

    this.attack = function() {
        // No default implementation
    }
}

var Soldier = function(x, y) {
    Unit.call(this, x, y, 100);

    var clipСapacity = 3;
    var clipAmmo = clipСapacity;
    var parentMove = this.move.bind(this);

    var reload = function() {
        console.log('Reloading...');
        clipAmmo = clipСapacity;
    }

    this.move = function() {
        console.log('To the battle!!!');
        parentMove();
    }
    
    this.attack = function() {
        if (clipAmmo <= 0) { reload(); }
        console.log('pew');
        clipAmmo -= 1;
    }
}

var Grenadier = function(x, y) {
    Unit.call(this, x, y, 80);

    this.attack = function() {
        console.log('Granade!!!');
        console.log('BANG!!!');
    }
}

var Sniper = function(x, y) {
    Soldier.call(this, x, y);

    var parentAttack = this.attack.bind(this);

    this.attack = function() {
        console.log('Aiming... aiming...');
        parentAttack();
    };
}
   
var rifleman = new Soldier(1, 1);
var sniper = new Sniper(1, 1);
var grenadier = new Grenadier(2, 2);

var squad = [rifleman, sniper, grenadier];

squad.forEach(unit => {
    unit.move();
    unit.attack();
});