module.exports = {
    port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || 'groupomania',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'password',
        options: {
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'localhost',
            storage: './groupomania.sqlite'
        }
    }
}