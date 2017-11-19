
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

    var reload = function() {
        console.log('Reloading...');
        clipAmmo = clipСapacity;
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

    
var rifleman = new Soldier(1, 1);
var grenadier = new Grenadier(2, 2);

rifleman.move();
rifleman.attack();

grenadier.move();
grenadier.attack();