const lib = require('../lib');
const redis = require('../redis');

module.exports = ({ router }) => {

  router.get('/api/weather/:coordinates', async (ctx, next) => {
    const { coordinates } = ctx.params;
    
    const country = await lib.getCountry(coordinates);

    const data = await redis.getData(country);

    let city, temperature, humidity, windSpeed;

    if (data) {
      ({ city, temperature, humidity, windSpeed } = data);
    } else {
      // TODO: Get Capital City
      city = 'Washington D.C.';
      let randomNumber;
      do {
        ({ temperature, humidity, windSpeed } = await lib.getWeatherData(coordinates));
        randomNumber = Math.floor(Math.random() * 10);
      } while (randomNumber === 0);
      redis.setData(country, city, temperature, humidity, windSpeed);
    }

    ctx.body = {
      country,
      city,
      temperature,
      humidity,
      windSpeed,
    };
  });

};
