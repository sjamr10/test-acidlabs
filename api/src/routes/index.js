const lib = require('../lib');
const redis = require('../redis');

module.exports = ({ router }) => {

  router.get('/api/weather/:coordinates', async (ctx, next) => {
    const { country } = await lib.getCountry(ctx.params.coordinates);

    const data = await redis.getData(country);

    let city, temperature;

    if (data) {
      ({ city, temperature } = data);
    } else {
      // TODO: Call Dark Sky API
      city = 'Washington D.C.';
      temperature = '26';
      redis.setData(country, city, temperature);
    }

    ctx.body = {
      country,
      city,
      temperature,
    };
  });

};