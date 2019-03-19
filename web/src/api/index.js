const axios = require('axios');

const getData = async (coordinates) => {
  const apiConfig = {
    timeout: 30000,
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3003/api/weather' : 'http://weatherapp.ddns.net/api/weather',
    rejectUnauthorized: false,
    strictSSL: false,
  };
  
  const url = `/${coordinates}`;

  const apiRequest = axios.create(apiConfig);

  const { data } = await apiRequest.get(url);

  return data;
}

export default getData;
