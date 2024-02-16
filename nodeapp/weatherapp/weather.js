var request = require('request')
module.exports = function (location, callback) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b68e48f9301346336be056c6d7673dca`
    request({
        url: url,
        json: true,
    }, function (error, response, body) {
        
        if (error) {
            callback('error');
        }
        else {
            callback(body.main.temp)
        }
    })
}