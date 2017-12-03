const request = require('request');

var getWeather = (lng,lat, callback) => {
    var lng= lng;
    var lat = lat;
  request({
    url:`https://api.darksky.net/forecast/fa820711ec752e21ac5a596b4ac8d6a1/${lng},${lat}`,
    json:true,
  } , (error,response,body) =>{
    if(error){
       callback('unable to connect to server');
    }
    else if(!error && response.statusCode === 200 ) {
        callback(undefined,{
          temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
        });
      }
    else if(response.statusCode === 400) {
        callback('Unable to find temperature');
    }
  });

};

module.exports.getWeather = getWeather;
