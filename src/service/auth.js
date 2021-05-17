const connection = require('../app/database')
class AuthS {
    // 登录
    async loginS(ctx) {
        const {name, password} = ctx.request.body;
        const statement = 'SELECT * FROM users WHERE name= ? && password = ?'
        const res = await connection.execute(statement, [name, password]);
        return res[0]
    }
}

module.exports = new AuthS();