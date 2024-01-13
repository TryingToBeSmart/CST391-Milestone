// Synchronize the Database
import { sequelize } from './sequelize.config';

// Synchronize all models with the database
sequelize.sync({ force: true }).then(() => {
  console.log('Database synchronized successfully.');
}).catch((error) => {
  console.error('Error synchronizing database:', error);
});
