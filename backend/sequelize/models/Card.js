import { DataTypes } from 'sequelize';
import  sequelize  from '../config/config.js';

export const Card = sequelize.define('Card', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  number: {
    type: DataTypes.STRING(19),
    allowNull: false
  },
  mm_yy: {
    type: DataTypes.STRING(5),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  surname: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'cards'
});


