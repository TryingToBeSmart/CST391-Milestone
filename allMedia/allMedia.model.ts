// Using sequelize based on the docs on sequelize.org
import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../sequelize.config';
import { User } from '../users/users.model';
import { StreamingService } from '../streamingServices/streamingServices.model';

// Define allMedia.models using sequelize.define
const AllMedia = sequelize.define('AllMedia', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  releaseDate: {
    type: DataTypes.DATE,
  },
});

// Foreign keys. 1 user can have many allMedia objects:
// Set up relationship with the UserMediaList table
// UserMediaList.userId -> user table id column
// UserMediaList.allMediaId -> allMedia table id column
AllMedia.belongsToMany(User, { through: 'UserMediaList' });

// Many StreamingService objects can have many AllMedia objects
// And many AllMedia objects can be on many StreamingService object
// Set up intermediate table AvailableMedia
AllMedia.belongsToMany(StreamingService, { through: 'AvailableMedia' });



export { AllMedia };

// Below is a way that ChatGPT recommends, claiming that extending the Model class has
// enhanced type safety to provide better autocompletion and type checking support with TypeScript
// It looks more complicated, so I'm choosing to use the version that is described in the
// sequelize.org docs above
/*
import { DataTypes, Model, Sequelize } from 'sequelize';

interface AllMediaAttributes {
  title: string;
  type: string;
  releaseDate: Date | null;
}

class AllMedia extends Model<AllMediaAttributes> implements AllMediaAttributes {
  public title!: string;
  public type!: string;
  public releaseDate!: Date | null;
}

export default (sequelize: Sequelize) => {
  AllMedia.init(
    {
      title: DataTypes.STRING,
      type: DataTypes.STRING,
      releaseDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'AllMedia',
    }
  );

  return AllMedia;
};
*/
