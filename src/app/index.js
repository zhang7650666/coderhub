const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const userRouter = require('../router/user');
const authRouter = require('../router/auth')
const {errorHandler} = require('./error')
const useRouter = require('../router')
const app = new Koa();

app.use(bodyParser())
useRouter(app)
// app.use(userRouter.routes()); // 将路由添加到中间件中
// app.use(userRouter.allowedMethods()); // 判断请求方式是否支持，如果请求的方式不对的话，会返回405 Method Not Allowed， 如果没有加allowedMethods()的话会返回404

// app.use(authRouter.routes()); // 将路由添加到中间件中
// app.use(authRouter.allowedMethods()); // 判断请求方式是否支持，如果请求的方式不对的话，会返回405 Method Not Allowed， 如果没有加allowedMethods()的话会返回404


app.on('error', errorHandler)

module.exports = app;