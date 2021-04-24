const path = require('path')
module.exports = {
    PORT: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'galaxy',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: path.resolve(__dirname, '../../galaxy.sqlite')
        }
    },
    auth: {
        jwtSecret: process.env.JWT_SECRET || "foxycode"
    }
}