const Router = require('koa-router');

const userRouter = new Router({prefix: '/users'});
const {createC} = require('../controller/user');
const {verifyUser, handlePassword} = require('../middleware/user')

userRouter.post('/', verifyUser, handlePassword, createC);

module.exports = userRouter;
