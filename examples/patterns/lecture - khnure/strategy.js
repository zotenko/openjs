var Shipping = function() {
    this.company = '';
}

Shipping.prototype.setStrategy = function(company) {
    this.company = company;
}

Shipping.prototype.calculate = function(package) {
    return this.company.calculate(package);
}

var UPS = function() {
    this.calculate = function(package) {
        // Do some cool calculation
        return '$101';
    }
}

var Fedex = function() {
    this.calculate = function(package) {
        // Do some cool calculation
        return '$99.9';
    }
}

var UkrPoshta = function() {
    this.calculate = function() {
        throw Error('UkrPoshta has lost your package.');
    }
}

var shipping = new Shipping();
var package = { h: 100, w: 300, d: 300};

var upsPrice;
var fedexPrice;

shipping.setStrategy(new UPS());
upsPrice = shipping.calculate(package);

shipping.setStrategy(new Fedex());
fedexPrice = shipping.calculate();

try {
    shipping.setStrategy(new UkrPoshta());
    shipping.calculate();
} catch(error) {
    console.log(error.message);
}


console.log('UPS price', upsPrice);
console.log('Fedex price', fedexPrice);