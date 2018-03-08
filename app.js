const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')


var argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        description: 'Address',
        string: true
    }
}).help().alias('help', 'h').argv

var userAddress = encodeURIComponent(argv.address);
console.log(userAddress)

geocode.geoCodeAddress(userAddress)