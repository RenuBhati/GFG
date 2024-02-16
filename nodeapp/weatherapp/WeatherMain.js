var myweather = require('./weather.js');
const location = require('./location.js');
var argv = require('yargs').option('location', { type: 'string',demand: false,alias: 'l' ,description: 'Location to search for....!' }).help('help').argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
    myweather(argv.location, function (data) {
        console.log("the city detected is " + argv.l + "and temp is"+ data);
    })
}
else {
    console.log('detecting location....!');
    location(function (loc) {
        if (location) {
            myweather(loc.city, function (data) {
                console.log("the city detected is " + loc.city + " and temp is  " + data);
            })
        }

    })
}