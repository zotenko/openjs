// Реализовать объект который будет описывать финансовый учет на проекте.



const ProjectModule = (function () {
    let project;
  
    let createProject = function () {
      return {
        participants: [],
        pricing: { },
        isBusy: false,
    
        /* implement initialization of the object */
        /* participants - predefined array of participants */
        /* pricing - predefined object (keyvalue collection) of pricing */
        init(participants, pricing) {
            if(typeof(participants) == "undefined" && typeof(pricing) == "undefined"){ 
                
            }else{
                this.participants = participants;
                this.pricing = pricing;
            }
        },
    
        /* pass found participant into callback, stops on first match */
        /* functor - function that will be executed for elements of participants array */
        /* callbackFunction - function that will be executed with found participant as argument or with null if not */
        /* callbackFunction (participant) => {} */
        findParticipant(functor, callbackFunction) { 
            if(this.isBusy == false){
                this.isBusy = true;
                for(let k = 0; k < 10; k++){
                    setTimeout(()=>{
                        let result = false;
                        for(let i = 0; i < this.participants.length; i++){
                            result = functor(this.participants[i]);
                            if(result == true){
                                callbackFunction(this.participants[i]);
                                break;
                            }
                        }
                
                        if(result == false){
                            callbackFunction(null);
                        }
                    });
                }

                this.isBusy = false;          
            }
    
        },
    
        /* pass array of found participants into callback */
        /* functor - function that will be executed for elements of participants array */
        /* callbackFunction - function that will be executed with array of found participants as argument or empty array if not */
        /* callbackFunction (participantsArray) => {} */
        findParticipants(functor, callbackFunction) {
            if(this.isBusy == false){
                this.isBusy = true;
                for(let k = 0; k < 10; k++){
                    setTimeout(()=>{
                        let participantsArray = [];
                        let result = false;
                        for(let i = 0; i < this.participants.length; i++){
                            result = functor(this.participants[i]);
                            if(result == true){
                                participantsArray.push(this.participants[i]);
                                result = false;
                            }
                        }
                
                        callbackFunction(participantsArray);
                    });
                }
                
                 this.isBusy = false;          
            }
         },
    
        /* push new participant into this.participants array */
        /* callbackFunction - function that will be executed when job will be done */
        /* (err) => {} */
        addParticipant(participantObject, callbackFunction) { 
            if(this.isBusy == false){
                this.isBusy = true;
                for(let k = 0; k < 10; k++){
                    setTimeout(()=>{
                        if("seniorityLevel" in participantObject){
                            this.participants.push(participantObject);
                            callbackFunction();
                        }else{
                            callbackFunction(new Error().stack);
                        }
                    });
                }
                
                 this.isBusy = false;          
            }
        },
    
        /* push new participant into this.participants array */
        /* callback should receive removed participant */
        /* callbackFunction - function that will be executed with object of removed participant or null if participant wasn't found when job will be done */
        removeParticipant(participantObject, callbackFunction) { 
            if(this.isBusy == false){
                this.isBusy = true;
                for(let k = 0; k < 10; k++){
                    setTimeout(()=>{
                        let sLevel = "seniorityLevel" in participantObject;
                        let fName = "firstName" in participantObject;
                        let lName = "lastName" in participantObject;
                
                        let participantsArray = [];
                
                        let count = 0;
                
                        for(let i = 0; i < this.participants.length; i++){
                            if(sLevel && fName && lName){
                                if(this.participants[i].firstName == participantObject.firstName 
                                    && this.participants[i].lastName == participantObject.lastName 
                                    && this.participants[i].seniorityLevel == participantObject.seniorityLevel){
                                        count++;
                                      continue;  
                                }else{
                                    participantsArray.push(this.participants[i]);
                                }
                            }else if(sLevel && fName){
                                if(this.participants[i].firstName == participantObject.firstName 
                                    && this.participants[i].seniorityLevel == participantObject.seniorityLevel){
                                        count++;
                                      continue;  
                                }else{
                                    participantsArray.push(this.participants[i]);
                                }
                            }else if(sLevel && lName){
                                if(this.participants[i].lastName == participantObject.lastName 
                                    && this.participants[i].seniorityLevel == participantObject.seniorityLevel){
                                        count++;
                                      continue;  
                                }else{
                                    participantsArray.push(this.participants[i]);
                                }
                            }else if(fName && lName){
                                if(this.participants[i].firstName == participantObject.firstName 
                                    && this.participants[i].lastName == participantObject.lastName){
                                        count++;
                                      continue;  
                                }else{
                                    participantsArray.push(this.participants[i]);
                                }
                            }else if(fName){
                                if(this.participants[i].firstName == participantObject.firstName){
                                    count++;
                                      continue;  
                                }else{
                                    participantsArray.push(this.participants[i]);
                                }
                            }else if(lName){
                                if(this.participants[i].lastName == participantObject.lastName){
                                    count++;
                                      continue;  
                                }else{
                                    participantsArray.push(this.participants[i]);
                                }
                            }else if(sLevel){
                                if(this.participants[i].seniorityLevel == participantObject.seniorityLevel){
                                    count++;
                                      continue;  
                                }else{
                                    participantsArray.push(this.participants[i]);
                                }
                            }
                        }
                
                        if(count == 1){
                            this.participants = participantsArray;
                            callbackFunction(participantObject);
                        }
                        if(count == 0){
                            callbackFunction(null);
                        }
                    });
                }
                
                 this.isBusy = false;          
            }
        },
    
        /* Extends this.pricing with new field or change existing */
        /* callbackFunction - function that will be executed when job will be done, doesn't take any arguments */
        setPricing(participantPriceObject, callbackFunction) { 
            if(this.isBusy == false){
                this.isBusy = true;
                for(let k = 0; k < 10; k++){
                    setTimeout(()=>{
                        if(Object.keys(participantPriceObject).length == 1){
                            this.pricing[Object.keys(participantPriceObject)[0]] = participantPriceObject[Object.keys(participantPriceObject)[0]];
                        }
                        if(Object.keys(participantPriceObject).length > 1){
                            for(let i = 0; i < Object.keys(participantPriceObject).length; i++){
                                this.pricing[Object.keys(participantPriceObject)[i]] = participantPriceObject[Object.keys(participantPriceObject)[i]];
                            }
                        }

                        callbackFunction();
                    });
                }
                
                 this.isBusy = false;          
            }
        },
    
        /* calculates salary of all participants in the given period */
        /* periodInDays, has type number, one day is equal 8 working hours */
        calculateSalary(periodInDays) {
            let salary = 0;
            
            for(let i = 0; i < this.participants.length; i++){
                if(this.participants[i].seniorityLevel in this.pricing == false){
                    return pricing;
                }else{
                    salary += this.pricing[this.participants[i].seniorityLevel] * 8;
                }
            }

            salary *= periodInDays;
            return salary;
         }
      }
    }
  
    return {
      getInstance: function () {
        return project || (project = createProject());
      }
    }
  })();


/* реализация */
module.exports = {
    firstName: 'Bohdan',
    lastName: 'Breslavets',
    task: ProjectModule.getInstance()
}

// Где ProjectModule это объект с методом getInstance()