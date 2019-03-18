const lib = require('../lib');

module.exports = ({ router }) => {

  router.get('/api/weather/:coordinates', async (ctx, next) => {
    // Get country
    const { country } = await lib.getCountry(ctx.params.coordinates);

    // Query Redis

    const city = 'Santiago';
    const temperature = '13';

    // If not in Redis; query Dark Sky and Save to Redis

    // Else send Redis data

    ctx.body = {
      country,
      city,
      temperature,
    };
  });

};