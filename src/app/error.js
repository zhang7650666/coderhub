const {NAME_OR_PASSWORD_IS_REQUIRED, USER_ALREADY_EXISTS, USER_DOES_NOT_EXISTS, PASSWORD_IS_INCORRENT} = require('../constants/error-types')
const errorHandler = (error, ctx) => {
    let status;
    let msg;
    switch(error.message) {
        case NAME_OR_PASSWORD_IS_REQUIRED:
            status = 400;
            msg = '用户名或密码不能为空';
            break;
        case USER_ALREADY_EXISTS:
            status = 409;
            msg = '用户名已存在';
            break;
        case USER_DOES_NOT_EXISTS:
            status = 400;
            msg = '用户不存在';
            break;
        case PASSWORD_IS_INCORRENT:
            status = 400;
            msg = '密码错误';
            break;
            
        default:
            status = 404;
            msg = '没有找到异常';

    }
    ctx.status =status;
    ctx.body = msg
}

module.exports = {
    errorHandler
}