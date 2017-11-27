class Shipping {
    request() {
        /* Implementation */
        return '$101';
    }
}

class AdvancedShipping {
    constructor() {
        this.start = 0;
        this.destenation = 0;
        this.weight = 0;
    }

    setStart(position) {
        this.start = position;
    }

    setDestenation(position) {
        this.destenation = position;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    calculate() {
        let distance = this.destenation - this.start;
        return distance * this.weight;
    }
}

class ShippingAdapter {
    constructor() {
        this.shipping = new AdvancedShipping();
        this.shipping.setWeight(101);
        this.shipping.setStart(100);
        this.shipping.setDestenation(270);
    }

    request() {
        return `$${this.shipping.calculate()}`;
    }
}

const shipping = new ShippingAdapter();
console.log(shipping.request());