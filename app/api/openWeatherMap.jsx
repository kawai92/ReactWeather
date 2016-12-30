var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=56a88f65a8d37357e6b2fe6b9ec761cc&units=metric';

//API KEY 56a88f65a8d37357e6b2fe6b9ec761cc

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    //template strings Example
    //using back tics -- far left key on the keyboard
    //This way you can inject variable right inside the string
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(
      function (response)
      {
        if(response.data.cod && response.data.message) {
          throw new Error(response.data.message);
        }
        else{
          return response.data.main.temp;
        }
      },
      function (response) {
        throw new Error(response.data.message);
      }
    );
  }
}
