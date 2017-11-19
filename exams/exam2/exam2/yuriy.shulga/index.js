const ProjectModule = ( function() {
  return { 
    getInstance(){
      return {
        participants: [],
        pricing: { },

        init (participants, pricing)  {
          this.pricing = Object.assign({}, pricing);
          this.participants = participants;

          participants.forEach( (partic) => {
            if (!partic.hasOwnProperty('seniorityLevel')) {
            Object.defineProperty(partic, 'seniorityLevel',{
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'default value'
              });
            }
        });
    },

    findParticipant  (functor, callbackFunction)  {
      setTimeout( () => {
        let participant = this.participants.find(functor);
        participant == 'undefined' ? callbackFunction(null) : callbackFunction(participant);
      },5);
     },

    findParticipants  (functor, callbackFunction)  {
      setTimeout( () => {
        let participantsArray = this.participants.filter(functor);
        callbackFunction(participantsArray);

      },5);
    },

    addParticipant  (participantObject, callbackFunction) {
      setTimeout( () => {
        if(participantObject.hasOwnProperty('seniorityLevel')) {
          this.participants.push(participantObject);
          callbackFunction();
        }else{
          callbackFunction(err);
        }
      },5);
    },

    removeParticipant  (participantObject, callbackFunction)  {
      setTimeout( () => {
        if(this.participants.includes(participantObject)){
          this.participants.splice(this.participants.indexOf(participantObject), 1);
          callbackFunction(participantObject);
        }else{
          callbackFunction(null);
        }

      },5);
    },

    setPricing  (participantPriceObject, callbackFunction)  {
      setTimeout( () => {
        this.pricing = Object.assign(this.pricing, participantPriceObject);
        callbackFunction();

      },5);
    },

    calculateSalary  (periodInDays)  {
      let salary = this.participants.reduce(function(sum, item){
        return sum + this.pricing[item.seniorityLevel] * (periodInDays * 8);
      }, 0);
    }
        
      }
    }
  }

})();

module.exports = {
   firstName: 'Yuriy',
   lastName: 'Shulga',
   task: ProjectModule
}

