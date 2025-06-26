import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const Profession = sequelize.define('Profession', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_category: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  profession: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'professions'
});


