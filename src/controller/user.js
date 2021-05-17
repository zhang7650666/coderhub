const {createS}= require('../service/user')

class UserC {
    async createC(ctx, next) {
        const res = await createS(ctx);
        ctx.body = res;
    };
}

module.exports = new UserC;