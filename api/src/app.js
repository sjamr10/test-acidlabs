const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');

const app = new Koa();
const router = new Router();

const routes = require('./routes');
routes({ router });

app.use(logger());

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
