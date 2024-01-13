// See doc: https://sequelize.org/docs/v6/
// config the sequelize environment
import { Sequelize, Options } from 'sequelize';

const config: Options = {
    dialect: 'mysql',
    host: process.env.MY_SQL_DB_HOST || '127.0.0.1',
    port: parseInt(process.env.MY_SQL_DB_PORT || '3306', 10),
    username: process.env.MY_SQL_DB_USER || 'root',
    password: process.env.MY_SQL_DB_PASSWORD || 'root',
    database: process.env.MY_SQL_DB_DATABASE || 'streamingguide',
    pool: {
        max: parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT || '10', 10),
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};

// Sequelize instance based on the config environment.  All models will share this instance.
const sequelize = new Sequelize(config);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export { sequelize };