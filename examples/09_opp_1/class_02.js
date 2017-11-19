

var Soldier = function(x, y, health) {
        // Private properties
        // You can access them only inside a class
        var position = { x: x, y: y };
        var clipСapacity = 3;
        var clipAmmo = clipСapacity;

        // Private method
        var reload = function() {
            console.log('Reloading...');
            clipAmmo = clipСapacity;
        }
    
        // Public method
        this.move = function(direction) {
            position.x += 1;
            position.y += 1;
    
            console.log('I was moved.', 'My position is: x - ' + position.x + '; y - ' + position.y + ';');
        }
    
        // Public method
        this.attack = function() {
            if (clipAmmo <= 0) { reload(); }
            console.log('pew');
            clipAmmo -= 1;
        }
    }
    
    var rifleman = new Soldier(1, 1);

    rifleman.
    
    
    
    