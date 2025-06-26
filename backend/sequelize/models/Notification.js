import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const Notification = sequelize.define('Notification', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  notification: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'notifications'
});


