const {NAME_OR_PASSWORD_IS_REQUIRED, USER_ALREADY_EXISTS} = require('../constants/error-types');
const {getUserByName} = require('../service/user');
const {md5Password} = require('../utils/md5-password')

// 验证用户名密码是否合法
const verifyUser = async (ctx, next) => {
    const {name, password} = ctx.request.body;
    if(!name || !password) {
        const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED);
        return ctx.app.emit('error', error, ctx)
    }
    // 判断用户名是否已经注册过了，如果已经注册过了，不许在注册
    const userName = await getUserByName(name);
    if(userName.length) {
        const error = new Error(USER_ALREADY_EXISTS);
        return ctx.app.emit('error', error, ctx)
    }
    // 执行下一个中间件
    await next();
}

// 对密码进行加密
const handlePassword = async (ctx, next) => {
    const {name, password} = ctx.request.body;
    ctx.request.body.password = md5Password(password)
    await next();
}
module.exports = {
    verifyUser,
    handlePassword
}