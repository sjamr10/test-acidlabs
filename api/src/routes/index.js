const lib = require('../lib');
const redis = require('../redis');

module.exports = ({ router }) => {

  router.get('/api/weather/:coordinates', async (ctx, next) => {
    const { coordinates } = ctx.params;
    
    const { country, code } = await lib.getCountry(coordinates);

    const data = await redis.getData(code);

    let city, temperature, humidity, windSpeed;

    if (data) {
      ({ city, temperature, humidity, windSpeed } = data);
    } else {
      city = await lib.getCapitalCity(code);

      let randomNumber;
      do {
        ({ temperature, humidity, windSpeed } = await lib.getWeatherData(coordinates));
        randomNumber = Math.floor(Math.random() * 10);
      } while (randomNumber === 0);
      
      redis.setData(code, city, temperature, humidity, windSpeed);
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
