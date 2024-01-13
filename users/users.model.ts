// Using sequelize based on the docs on sequelize.org
import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../sequelize.config';
import { AllMedia } from '../allMedia/allMedia.model';

// Define User.models using sequelize.define
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
});

// Foreign keys. 1 user can have many allMedia objects:
// Set up relationship with the UserMediaList table
// UserMediaList.user_id -> user table id column
// UserMediaList.allMedia_id -> allMedia table id column
User.belongsToMany(AllMedia, { through: 'UserMediaList' });

export { User };