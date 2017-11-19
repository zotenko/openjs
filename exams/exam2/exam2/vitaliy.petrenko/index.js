var singleton = (function(){
    var project;
    function createInstance() {
        var obj = {
            participants: [],
            pricing: { },
            isBusy: Boolean,

            init(participants, pricing) {
                if(!this.isBusy) {
                    this.isBusy = true;
                    if( pricing != undefined && participants != undefined) {
                        this.participants = participants;
                        this.pricing = pricing;
                    }
                    this.isBusy = false;
                }
                else {
                    return false;
                }
            },
            findParticipant(functor, callbackFunction) {
                if(!this.isBusy) {
                    this.isBusy = true;
                    for(var i = 0; i < this.participants.length; i++) {
                        if(functor(this.participants[i]) ) {
                            callbackFunction(participants[i]);
                            this.isBusy = false;
                            return;
                        }
                    }
                    //if no match
                    callbackFunction(null);
                    this.isBusy = false;
                }
                else{
                    return false;
                }
            },
            findParticipants(functor, callbackFunction) {
                if(!this.isBusy) {
                    this.isBusy = true;
                    var arr = [];
                    for(var i = 0; i < this.participants.length; i++) {
                        if(functor(this.participants[i]) ) {
                            arr.push( this.participants[i] );
                        }
                    }
                    callbackFunction(arr);
                    this.isBusy = false;
                }
                else{
                    return false;
                }
            },
            addParticipant(participantObject, callbackFunction) {
                if(!this.isBusy) {
                    this.isBusy = true;
                    this.participants.push(participantObject);
                    if ( participantObject.seniorityLevel != undefined ) {
                        callbackFunction();
                    }
                    else {
                        callbackFunction(new Error("err"));
                    }
                    this.isBusy = false;
                }
                else{
                    return false;
                }
            },
            removeParticipant(participantObject, callbackFunction) {
                if(!this.isBusy) {
                    this.isBusy = true;
                    for(var i = 0; i < this.participants.length; i++) {
                        if(participantObject == this.participants[i] ) {
                            callbackFunction(this.participants[i]);
                            this.participants[i] = undefined;
                            return;
                        }
                    }
                    callbackFunction(null);
                    this.isBusy = false;
                }
                else{
                    return false;
                }
            },
            setPricing(participantPriceObject, callbackFunction) {
                if(!this.isBusy) {
                    this.isBusy = true;
                    var key;
                    for(key in participantPriceObject) {
                        this.pricing[key] = participantPriceObject[key];
                    }
                    callbackFunction();
                    this.isBusy = false;
                }
                else {
                    return false;
                }
            },
            calculateSalary(periodInDays) {
                if(!this.isBusy) {
                    this.isBusy = true;
                    var value = 0;
                    for(var i = 0; i < this.participants.length; i++) {
                        value += this.pricing[ this.participants[i].seniorityLevel ];
                    }
                    value *= 8;
                    value *= periodInDays;
                    this.isBusy = false;
                    return value;
                }
                else {
                    return false;
                }
            }
        }
        return obj;
    }
    return {
        getInstance: function () {
            if(!project) {
                project = createInstance();
            }
            return project;
        }
    };
})();

module.exports = {
    firstName: 'Vitaliy',
    lastName: 'Petrenko',
    task: singleton
}
