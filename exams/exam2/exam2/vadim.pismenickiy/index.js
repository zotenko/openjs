
const participant = {
    firstName: '',
    lastName: '',
    seniorityLevel: ''

}

const project = {
    participants: [],
    pricing: {}, //pricing{ 'junior': 10, etc}
    isBusy: false , 

    getInstance() { return this },    

    /* implement initialization of the object */
    /* participants - predefined array of participants */
    /* pricing - predefined object (keyvalue collection) of pricing */
    init(participants, pricing) {  
        if(participants==undefined||pricing==undefined){
            return;
        }
        this.participants=participants;
        this.pricing=pricing;    

    },

    /* pass found participant into callback, stops on first match */
    /* functor - function that will be executed for elements of participants array */
    /* callbackFunction - function that will be executed with found participant as argument or with null if not */
    /* callbackFunction (participant) => {} */
    findParticipant(functor, callbackFunction) {
        if(this.participants.find(functor) === undefined){
            return callbackFunction(null);
        } 

        setTimeout(this.isBusy=false);
        this.isBusy=true;        
        callbackFunction(this.participants.find(functor));
        
    },

    /* pass array of found participants into callback */
    /* functor - function that will be executed for elements of participants array */
    /* callbackFunction - function that will be executed with array of found participants as argument or empty array if not */
    /* callbackFunction (participantsArray) => {} */
    findParticipants(functor, callbackFunction) {
          var tempArr=[];       
        for(let i=0;i<this.participants.length;i++){
            if(functor(this.participants[i])){
                tempArr.push(this.participants[i]);
            }
        }
        callbackFunction(tempArr);
    },

    /* push new participant into this.participants array */
    /* callbackFunction - function that will be executed when job will be done */
    /* (err) => {} */
    addParticipant(participantObject, callbackFunction) {
        var check = false;
        if(participantObject.seniorityLevel){
            check=true;
            this.participants.push(participantObject);            
        }
        if(check==true){
            callbackFunction(undefined);            
        }
        else{
            callbackFunction(!undefined);            
        }
     },

    /* push new participant into this.participants array */
    /* callback should receive removed participant */
    /* callbackFunction - function that will be executed with object of removed participant or null if participant wasn't found when job will be done */
    removeParticipant(participantObject, callbackFunction) {
        var check = false;
        for(var x of project.participants){
            if(x==participantObject){
                check=true;
            }
        }
        if(check==true){
            this.participants.pop(participantObject);
            callbackFunction(participantObject);
        }
        else{
            callbackFunction(null);
        }
                
     },

    /* Extends this.pricing with new field or change existing */
    /* callbackFunction - function that will be executed when job will be done, doesn't take any arguments */
    setPricing(participantPriceObject, callbackFunction) { 
        this.pricing=participantPriceObject;
        callbackFunction(this.pricing);
    },

    /* calculates salary of all participants in the given period */
    /* periodInDays, has type number, one day is equal 8 working hours */
    calculateSalary(periodInDays) { 
        var salary= 0;
        var check = 0;
        for(var key of project.participants){
            for(var i in key){
                for(var iter in project.pricing){
                    if(key[i]==iter){
                        salary+=8*project.pricing[iter];
                        check++;
                    }
                }
        
            }
         
        }
        if(check<project.participants.length){
            throw Error;
        }
        salary*=periodInDays;
        return salary;
    }
}

/* const ProjectModule = (function() {
        
    return {
        getInstance:function(){
        return project;
    }}
})(); */


module.exports = {
    firstName: 'Vadim',
    lastName: 'Pismenitskiy',
    task: project
}