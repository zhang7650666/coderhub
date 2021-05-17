const app = require('./app');
require('./app/database'); // 链接数据库

const config = require('./app/config')

app.listen(config.APP_PORT, () => {
    console.log(`服务启动成功: ${config.APP_PORT}`)
})