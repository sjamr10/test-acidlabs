const axios = require('axios');

const getCountry = async (coordinates) => {
  const geocodeConfig = {
    timeout: 30000,
    baseURL: 'https://maps.googleapis.com/maps/api/geocode',
  };
  
  const geocodeRequest = axios.create(geocodeConfig);
  const url = `/json?latlng=${coordinates}&key=AIzaSyASGox7MBk1ngDW3M4XUPu3a_FQKNiPlj4`;
  const { data } = await geocodeRequest.get(url);
  const country = data.results.pop().address_components.pop().long_name;
  const code = data.results.pop().address_components.pop().short_name;
  return {
    country,
    code
  };
}

const getCapitalCity = async (code) => {
  const restcountriesConfig = {
    timeout: 30000,
    baseURL: 'https://restcountries.eu/rest/v2',
  };
  
  const restcountriesRequest = axios.create(restcountriesConfig);
  const url = `/all`;
  const { data } = await restcountriesRequest.get(url);
  const country = data.find((country) => country.alpha2Code.includes(code));
  const city = country.capital;
  return city;
}

const getWeatherData= async (coordinates) => {
  const darkskyConfig = {
    timeout: 30000,
    baseURL: 'https://api.darksky.net/forecast/f15600cecfd0b2a2e46f0d159981c3c3',
  };
  
  const darkskyRequest = axios.create(darkskyConfig);
  const url = `/${coordinates}?units=si`;
  const { data } = await darkskyRequest.get(url);
  const { temperature, humidity, windSpeed } = data.currently;
  return {
    temperature,
    humidity,
    windSpeed
  };
}

module.exports = {
  getCountry,
  getCapitalCity,
  getWeatherData
};
