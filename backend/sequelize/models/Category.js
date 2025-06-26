import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  category: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'categories'
});


