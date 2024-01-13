// Model for StreamingServices
import { DataTypes } from 'sequelize';
import { sequelize } from "../sequelize.config";
import { AllMedia } from '../allMedia/allMedia.model';

const StreamingService = sequelize.define('StreamingService', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    serviceName: {
        type: DataTypes.STRING,
    },
});

// Many StreamingService objects can have many AllMedia objects
// And many AllMedia objects can be on many StreamingService object
// Set up intermediate table AvailableMedia
StreamingService.belongsToMany(AllMedia, { through: 'AvailableMedia' });

export { StreamingService };