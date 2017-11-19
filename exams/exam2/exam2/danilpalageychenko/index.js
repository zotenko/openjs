//Реализовать объект который будет описывать финансовый учет на проекте.

/* participantObject EXAMPLE */
/* Example: { firstName: 'Sergey', lastName: 'Zotenko', seniorityLevel: 'intermediate' } */
// const participantObject = {
//     firstName: 'qwe',
//     lastName: 'ewq',
//     seniorityLevel: 'junior'
// }

/* pricingObject EXAMPLE */
/* Example: { 'junior': 10 } */
// const pricingObject = {
//     'w': 10,
//     'q': 100,
//     'e': 1000
// }


const project = {
    participants: [],
    pricing: { },
    isBusy: false,

    /* implement initialization of the object */
    /* participants - predefined array of participants */
    /* pricing - predefined object (keyvalue collection) of pricing */
    init(participants, pricing) { 
        // if (this.isBusy){
        //     return false
        // } 
        if (participants !== undefined && pricing !== undefined) {  
            if (Array.isArray(participants)){
                this.participants = [];
                let length = participants.length;
                for (let i = 0; i <= length -1 ; i++)
                {
                    if (participants[i].seniorityLevel) {
                        this.participants.push(participants[i]);
                    }
                }
            }
            if (typeof(pricing) == 'object') {
                this.pricing = {};
                for (let key in pricing) {
                    this.pricing[key] = pricing[key];
                }
            }
        }
        else {
            return false;
        }
    },

    /* pass found participant into callback, stops on first match */
    /* functor - function that will be executed for elements of participants array */
    /* callbackFunction - function that will be executed with found participant as argument or with null if not */
    /* callbackFunction (participant) => {} */
    findParticipant(functor, callbackFunction) {
        if (this.isBusy){
            return false
        }
        this.isBusy = true; 
        setTimeout(()=>{
            // for (let map in this.participants) {
            //     if(functor(this.participants[map])){
            //         this.isBusy = false;
            //         callbackFunction(this.participants[map]);     
            //         return;          
            //     }            
            // }
            //this.isBusy = false;
            //callbackFunction(null);            
            
            let find = this.participants.find(functor)
			if (find) {
                this.isBusy = false
                callbackFunction(find)
            }
            else {
                this.isBusy = false
                callbackFunction(null)
            }
        },100);
     },

    /* pass array of found participants into callback */
    /* functor - function that will be executed for elements of participants array */
    /* callbackFunction - function that will be executed with array of found participants as argument or empty array if not */
    /* callbackFunction (participantsArray) => {} */
    findParticipants(functor, callbackFunction) {
        if (this.isBusy){
            return false
        } 
        this.isBusy = true;  
        setTimeout(() => {
            this.isBusy = true;
            let arr = [];
            let j = 0;
            for (let map in this.participants) {
                if(functor(this.participants[map])){
                    arr[j] = this.participants[map];
                    j++;             
                }        
            }
            this.isBusy = false; 
            callbackFunction(arr);
        },100); 
    },

    /* push new participant into this.participants array */
    /* callbackFunction - function that will be executed when job will be done */
    /* (err) => {} */
    addParticipant(participantObject, callbackFunction) {
        if (this.isBusy){
            return false
        }
        this.isBusy = true;
        setTimeout(() => {
            if (participantObject.seniorityLevel)
            {
                let arr = {};
                for (let key in participantObject) {
                    arr[key] = participantObject[key];
                }
                this.participants.push(arr);
                this.isBusy = false;
                callbackFunction();

            }
            else {
                this.isBusy = false;
                callbackFunction(new Error);
            }
        },100)
    },

    /* push new participant into this.participants array */
    /* callback should receive removed participant */
    /* callbackFunction - function that will be executed with object of removed participant or null if participant wasn't found when job will be done */
    removeParticipant(participantObject, callbackFunction) { 
        if (this.isBusy){
            return false
        }
        this.isBusy = true;
        setTimeout(() => {
            let i = 0;
            let removed = [];
            for (let arr in this.participants) {
                i = 0;
                for (let key in this.participants[arr]){ 
                        if (Object.keys(this.participants[arr]).length == Object.keys(participantObject).length && 
                        this.participants[arr][key] == participantObject[key] ) {
                            i++
                            if (Object.keys(participantObject).length == i)
                            {
                                removed = this.participants.splice(arr, 1);
                            }
                        } 
                        else {
                            break;
                        }
                }
            }
            if(removed.length !== 0)
            {
                this.isBusy = false;
                callbackFunction(removed[0]);
            }
            else {
                this.isBusy = false;
                callbackFunction(null);     
            }  
        },100);
    },

    /* Extends this.pricing with new field or change existing */
    /* callbackFunction - function that will be executed when job will be done, doesn't take any arguments */
    setPricing(participantPriceObject, callbackFunction) {
        if (this.isBusy){
            return false
        }
        this.isBusy = true;
        setTimeout(() => {
            for (let key in participantPriceObject){ 
                    this.pricing[key] = participantPriceObject[key]
            } 
            this.isBusy = false;
            callbackFunction();
        },100);
     },

    /* calculates salary of all participants in the given period */
    /* periodInDays, has type number, one day is equal 8 working hours */
    calculateSalary(periodInDays) { 
        if (this.isBusy){
            return false
        }
        let sum = 0;
        for (let i = 0; i < periodInDays; i++) {
            for (let key of this.participants) {
                if (this.pricing[key.seniorityLevel]) {
                    sum += this.pricing[key.seniorityLevel] * 8;
                }
                else {
                    throw new Error;
                }
            }
        }
        return sum;
    }
}


// Все методы которые содержат callbackFunction в списке аргументов должны выполнять свою работу в setTimeout и возвращать значение в данный коллбек.

// Все методы которые содержат callbackFunction в списке аргументов должны устанавливать isBusy в значение true когда начинают работу
// и в значение false когда заканчивают работу.

// Если isBusy установлено в true метод не должен выполнять какую либо работу и сразу же вернуть false.

// Объект project должен быть реализован как синглтон.

// !!! Я ожидаю что Вы запушите файл index.js в корень предоставленного репозитория в следующем виде


const Singleton  = (function() {
    let instance;
    function createInstance() {
        return copy = Object.assign({}, project);
    }
    // function createInstance() {
    //     return obj = project;
    // }
    return {
        getInstance: function () {
            return instance || (instance = createInstance());
        }
    };
})();

/* реализация */
module.exports = {
    firstName: 'Danil',
    lastName: 'Palageychenko',
    task: Singleton.getInstance()
}

//Где ProjectModule это объект с методом getInstance()