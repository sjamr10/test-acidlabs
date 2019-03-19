module.exports = (app) => {
  app.use(async ({ response }, next) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    response.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, flow-id, track-id, request-id, application, apikey');
    await next();
  });
};
