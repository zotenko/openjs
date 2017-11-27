class Collection {
    constructor(values) {
        this.values = values || [];
    }

    push(value) {
        this.values.push(value);
    }

    [Symbol.iterator]() {
        let collection = this;
        let index = 0;
        return {
            next() {
                return {
                    value: collection.values[index],
                    done: index++ >= collection.values.length
                }
            }
        }
    }
}

let collection = new Collection(['apple', 'banana', 'pear']);

for(let item of collection) {
    console.log(item);
}