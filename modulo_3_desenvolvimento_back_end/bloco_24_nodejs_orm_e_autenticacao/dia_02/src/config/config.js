require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...config,
    database: 'employees_associations_development',
  },
  test: {
    ...config,
    database: 'employees_associations_test',
    logging: false,
  },
  production: {
    ...config,
    database: 'employees_associations_production',
  },
};