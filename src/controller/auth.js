const {loginS} = require('../service/auth')
class AuthC {
    async loginC(ctx, next) {
        const res = await loginS(ctx, next);
        ctx.body = res;
    }
}

module.exports = new AuthC();