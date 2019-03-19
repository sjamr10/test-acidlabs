const lib = require('../lib');
const redis = require('../redis');

module.exports = ({ router }) => {

  router.get('/api/weather/:coordinates', async (ctx, next) => {
    const { coordinates } = ctx.params;
    const country = await lib.getCountry(coordinates);

    const data = await redis.getData(country);

    let city, temperature;

    if (data) {
      ({ city, temperature } = data);
    } else {
      city = 'Washington D.C.';
      temperature = await lib.getTemperature(coordinates);
      redis.setData(country, city, temperature);
    }

    ctx.body = {
      country,
      city,
      temperature,
    };
  });

};