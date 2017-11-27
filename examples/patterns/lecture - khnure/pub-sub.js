class EventBus {
    constructor() {
        this.subscribers = [];
    }

    subscribe(event, callback) {
        this.subscribers.push({ event: event, callback: callback});
    }

    dispatch(event, value) {
        this.subscribers
                .filter(subscriber => subscriber.event === event)
                .forEach(subscriber => subscriber.callback(value));
    }
}

class Collection {
    constructor(data = []) {
        this.data = data;
        this.eventBus = new EventBus();
    }

    push(value) {
        this.data.push(value);
        this.eventBus.dispatch('COLLECTION_UPDATED', value);
    }
}

