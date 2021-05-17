const {NAME_OR_PASSWORD_IS_REQUIRED, USER_DOES_NOT_EXISTS, PASSWORD_IS_INCORRENT} = require('../constants/error-types');
const {getUserByName} = require('../service/user');
const {md5Password} = require('../utils/md5-password')

const verifyLogin = async(ctx, next) => {
    const {name, password} = ctx.request.body;
    // 用户名和密码不能为空
    if(!name || !password) {
        const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED);
        return ctx.app.emit('error', error, ctx)
    }
    // 判断用户是否存在
    const res = await getUserByName(name);
    const user = res[0];
    console.log('user', user)
    if(!user) {
        const error = new Error(USER_DOES_NOT_EXISTS);
        return ctx.app.emit('error', error, ctx)
    }

    // 判断数据库中的密码是否和登录密码一致
    if(md5Password(password) != user.password) {
        const error = new Error(PASSWORD_IS_INCORRENT);
        return ctx.app.emit('error', error, ctx)
    }
    ctx.request.body.password = md5Password(password);
    ctx.user = user;
    await next();

}

module.exports = {
    verifyLogin
}