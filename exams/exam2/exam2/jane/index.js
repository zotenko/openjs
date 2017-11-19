const ProjectModule = (function() {
    let instance;
    const createInstance = () => ({
        participants: [],
        pricing: {},
        isBusy: false,

        init(participants, pricing) {
            if (
                participants instanceof Array &&
                participants.every(item => item.hasOwnProperty('seniorityLevel'))
            )
                this.participants = participants;
            this.pricing = pricing;
        },

        findParticipant(functor, callbackFunction) {
            this.isBusy ? false : (this.isBusy = true);

            setTimeout(() => {
                const firstParticipant = this.participants.find(functor);
                this.isBusy = false;
                callbackFunction(firstParticipant || null);
            }, 4);
        },

        findParticipants(functor, callbackFunction) {
            this.isBusy ? false : (this.isBusy = true);

            setTimeout(() => {
                const allFindParticipants = this.participants.filter(functor);
                this.isBusy = false;
                callbackFunction(allFindParticipants || []);
            }, 4);
        },

        addParticipant(participantObject = {}, callbackFunction) {
            this.isBusy ? false : (this.isBusy = true);
            setTimeout(() => {
                try {
                    if (participantObject.hasOwnProperty('seniorityLevel')) {
                        this.participants.push(participantObject);
                        this.isBusy = false;
                        callbackFunction();
                    } else {
                        throw new Error('seniorityLevel undefined');
                    }
                } catch (err) {
                    this.isBusy = false;
                    callbackFunction(err);
                }
                this.isBusy = false;
            }, 4);
        },
        removeParticipant(participantObject, callbackFunction) {
            this.isBusy ? false : (this.isBusy = true);
            setTimeout(() => {
                const part = this.participants.indexOf(participantObject);
                if (part !== -1) {
                    this.participants.splice(part, 1);
                    this.isBusy = false;
                    callbackFunction(participantObject);
                } else {
                    this.isBusy = false;
                    callbackFunction(null);
                }
                this.isBusy = false;
            }, 4);
        },

        setPricing(participantPriceObject, callbackFunction) {
            this.isBusy ? false : (this.isBusy = true);
            setTimeout(() => {
                Object.assign(this.pricing, participantPriceObject);
                this.isBusy = false;
                callbackFunction();
            }, 4);
        },

        calculateSalary(periodInDays) {
            const workHours = periodInDays * 8;

            let allSalary = this.participants.reduce((prev, participant) => {
                if (!Object.keys(this.pricing).includes(participant.seniorityLevel)) {
                    throw new Error('error');
                }

                for (let key in this.pricing) {
                    if (participant.seniorityLevel === key) {
                        prev += this.pricing[key] * workHours;
                    }
                }
                return prev;
            }, 0);

            return allSalary;
        },
    });
    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
module.exports = {
    firstName: 'Jane',
    lastName: 'Shkyrmetoffa',
    task: ProjectModule
}