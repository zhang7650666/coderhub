const crypto = require('crypto');
const md5Password = (pass) => {
    const md5 = crypto.createHash('md5');
    const res = md5.update(pass).digest('hex');
    return res;
}

module.exports = {
    md5Password
}