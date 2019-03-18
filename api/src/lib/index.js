const axios = require('axios');

const getCountry = async (coordinates) => {
  const geocodeConfig = {
    timeout: 30000,
    baseURL: 'https://maps.googleapis.com/maps/api/geocode',
    rejectUnauthorized: false,
    strictSSL: false,
  };
  
  const url = `/json?latlng=${coordinates}&key=AIzaSyASGox7MBk1ngDW3M4XUPu3a_FQKNiPlj4`;

  const geocodeRequest = axios.create(geocodeConfig);

  const { data } = await geocodeRequest.get(url);

  const country = data.plus_code.compound_code.split(',').pop().trim();

  return {
    country,
  };
}

module.exports = {
  getCountry,
};
