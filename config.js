module.exports = {
  api: {
    port: process.env.API_PORT || 3000
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!'
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'db4free.net',
    user: process.env.MYSQL_USER || 'test_afuser',
    password: process.env.MYSQL_HOST || '12345678',
    database: process.env.MYSQL_DB || 'test_afdb'
  }
}