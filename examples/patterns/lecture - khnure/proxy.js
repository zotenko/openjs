var GeoCoder = function() {
    this.getLatLng = function(address) {
        console.log('GeoCoder call for ' + address);

        switch(address) {
            case 'Kiev':
                return '54.4152° N, 58.9752° E ';
            break;
            case 'Kharkiv':
                return '18.0888° N, 58.2420° E ';
            break;
            case 'Amsterdam':
                return '52.3700° N, 4.8900° E';
            break;
            case 'London':
                return '51.5171° N, 0.1062° W';
            break;
            case 'Paris':
                return '48.8742° N, 2.3470° E';
            break;
            case 'Berlin':
                return '52.5233° N, 13.4127° E';
            break;
            default:
                return '';
            break;
        }
    }
}

function GeoProxy() {
    var geocoder = new GeoCoder();
    var geocache = {};

    this.getLatLng = function(address) {
        console.log('GeoProxy call for ' + address);

        if (!geocache[address]) {
            geocache[address] = geocoder.getLatLng(address);
        }

        return geocache[address];
    }

    this.getCount = function() {
        return Object.keys(geocache).length;
    }
};

var geoproxy = new GeoProxy();

geoproxy.getLatLng('Kiev');
geoproxy.getLatLng('Kiev');
geoproxy.getLatLng('Kiev');
geoproxy.getLatLng('Kiev');
geoproxy.getLatLng('Kharkiv');
geoproxy.getLatLng('Kharkiv');

console.log('London Location', geoproxy.getLatLng('London'));
console.log('Proxy chache count', geoproxy.getCount());