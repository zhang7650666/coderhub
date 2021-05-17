const mysql = require('mysql2');
const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
} = require('./config');

// 创建连接池
const connections = mysql.createPool({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    // dialet: 'mysql',
    // connectionLimit: 10,
});

connections.getConnection((err, conn) => {
    conn.connect((err) => {
        err ? console.log('链接失败') :console.log('链接成功')
    })
})
module.exports = connections.promise();