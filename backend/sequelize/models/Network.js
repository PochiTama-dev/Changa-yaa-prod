import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const Network = sequelize.define('Network', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  network: {
    type: DataTypes.STRING,
    allowNull: false
  },
  icon: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'networks'
});


