const request = require("request");

const API_KEY = process.env.OPENWEATHER_API_KEY;

function weatherbycity(cityName) {
  const myUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&APPID=${API_KEY}`;
  const temp = request({
    url:myUrl,
    method: "GET"
  }, function(error, response, result) {
    const json = JSON.parse(result);
    return `${json.main.temp} °C`;
  });
  return temp;
}

//weatherbycity("Lille");
module.exports = weatherbycity;
