module.exports = {
    sequelize: {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        database: '',
        username: 'root',
        password: 'root',
        logging: false
    },
    cors: {
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
        credentials: true
    },
    security: {
        csrf: {
            enable: false,
            ignoreJSON: true
        },
        domainWhiteList: [
            'http://localhost:8080',
        ]
    }
};
