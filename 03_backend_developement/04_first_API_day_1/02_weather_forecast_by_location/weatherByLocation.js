const request = require("request");

const API_KEY = process.env.OPENWEATHER_API_KEY;

function weatherByLocation(lat,lon) {
  const myUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&APPID=${API_KEY}`;
  const temp = request({
    url:myUrl,
    method: "GET"
  }, function(error, response, result) {
    const json = JSON.parse(result);
    return `${json.id.main.description}`;
  });
  return temp;
}

//weatherBylocation(32.661343, 51.680374);
module.exports = weatherByLocation;
