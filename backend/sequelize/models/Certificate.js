import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const Certificate = sequelize.define('Certificate', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  job: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  certificate: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'certificates'
});

