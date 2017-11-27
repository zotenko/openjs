window.EventBus = (() => {
    class EventBus {
        constructor() {
            this.subscribers = [];
        }

        subscribe(eventName, callback) {
            this.subscribers
                    .push({
                        eventName: eventName,
                        callback: callback
                    });
        }

        dispatch(eventName, value) {
            this.subscribers
                        .filter(sub => sub.eventName === eventName)
                        .forEach(sub => sub.callback(value));
        }
    }

    let instance;

    return {
        getInstance() {
            if (!instance) {
                instance = new EventBus();
            }

            return instance;
        }
    }
})();