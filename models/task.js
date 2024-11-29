import {DataTypes} from 'sequelize';
import sequelize from '../config/db.js';


const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prioprity: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Low',
    },
    description: {  
      type: DataTypes.TEXT,
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'false',
      field: 'is_done',
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'updated_at',
    },
    dueDate: {
      type: DataTypes.DATE,
      field: 'due_date',
    },
  }, {
    tableName: 'tasks',
    timestamps: false,
  });
  
  export default Task;