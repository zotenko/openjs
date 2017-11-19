

var Soldier = function(x, y, health) {

    var position = { x: x, y: y };

    this.move = function(direction) {
        position.x += 1;
        position.y += 1;

        console.log(
            'I was moved.', 
            'My position is: x - ' + position.x + '; y - ' + position.y + ';'
        );
    }

    this.attack = function() {
        console.log('pew');
    }
}

var rifleman = new Soldier(1, 1);

rifleman.move();
rifleman.attack();



