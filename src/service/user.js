const connection = require('../app/database');
class UserS {
    // 向user表中插入用户名和密码
    async createS(ctx) {
        const {name, password} = ctx.request.body;
        const statement = 'INSERT INTO users (name, password) VALUES (?, ?);'
        const res = await connection.execute(statement, [name, password])
        return res[0];
    }

    // 查询用户名
    async getUserByName(name) {
        const statement = 'SELECT * FROM users WHERE name = ?;'
        const res = await connection.execute(statement, [name]);
        console.log('res666', res[0], name)
        return res[0]
    }
}

module.exports = new UserS();