class ObservableMenuItem {
    constructor(title, children = null) {
        this.listeners = [];
        this._title = title;
        this._children = children;
        
        this._subscribeToChildren();
    }

    _subscribeToChildren() {
        if (this._children) {
            this._children.subscribe(this.onChildChange.bind(this));
        }
    }

    onChildChange() {
        this._notify();
    }

    set title(value) { 
        this._title = value;
        this._notify();
    }

    get title() { return this._title; }

    set children(value) { 
        this._children = value;
        this._subscribeToChildren();
        this._notify();
    }

    get children() { return this._children; }

    subscribe(cb) {
        if (typeof cb === 'function') {
            this.listeners.push(cb);
        }
    }

    _notify() {
        this.listeners.forEach(cb => cb());
    }
}

class ObservableCollection {
    constructor(items = []) {
        this.listeners = [];
        this.items = items;

        this.items.forEach((item) => {
            item.subscribe(this.onItemChange.bind(this));
        });
    }

    onItemChange() {
        this._notify();
    }

    push(item) {
        item.subscribe(this.onItemChange.bind(this));
        this.items.push(item);
        this._notify();
    }

    subscribe(cb) {
        if (typeof cb === 'function') {
            this.listeners.push(cb);
        }
    }

    _notify() {
        this.listeners.forEach(cb => cb());
    }
}