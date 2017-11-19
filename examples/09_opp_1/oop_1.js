const wildDuck = {
    
        speach: 'Quack',
        speak() { 
            console.log(this.speach); 
        },
        fly() { 
            console.log('I fly so high!'); 
        }
    
    }
    
    const domesticDuck = {
    
    
        speach: 'Quack',
        speak() { 
            console.log(this.speach); 
        },
        fly() { 
            console.log('I\'m too \
            heavy for this.'); 
        }
    
    
    }
    
    const evilDuck = {
    
    
        speach: 'Pshhhhh...',
        strength: 10,
        speak(speachTarget) { 
            console.log(this.speach);
            this.attak(speachTarget);
        },
        fly() { return; },
        attak(target) { 
            target
            .makeDamage(this.strength);
        }
    
    
    }