// Using sequelize based on the docs on sequelize.org
import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize.config';

// Define UserMediaList.models using sequelize.define
const UserMediaList = sequelize.define('UserMediaList', {
  userId: {
    type: DataTypes.INTEGER,
  },
  allMediaId: {
    type: DataTypes.INTEGER,
  },
});

// Foreign keys. 1 user can have many allMedia objects:
// userId -> user table id column
// allMediaId -> allMedia table id column

export { UserMediaList };