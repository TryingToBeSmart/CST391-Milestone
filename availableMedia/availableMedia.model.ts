// Using sequelize based on the docs on sequelize.org
import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize.config';

// Define AvailableMedia.models using sequelize.define
const AvailableMedia = sequelize.define('UserMediaList', {
  streamingServicesId: {
    type: DataTypes.INTEGER,
  },
  allMediaId: {
    type: DataTypes.INTEGER,
  },
});

// Foreign keys. 1 user can have many allMedia objects:
// streamingServicesId -> streamingServices table id column
// allMediaId -> allMedia table id column

export { AvailableMedia };