const Router = require('koa-router');
const authRouter = new Router({prefix: '/auth'});
const {loginC} = require('../controller/auth');
const {verifyLogin} = require('../middleware/auth')

authRouter.post('/login', verifyLogin, loginC);

module.exports = authRouter