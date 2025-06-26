import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const Advertising = sequelize.define('Advertising', {
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
  id_role: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
  },
  id_category: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
  },
  id_profession: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  id_payment: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  banned: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 0
  },
  title: {
      type: DataTypes.TEXT,
      allowNull: false
  },
  description: {
      type: DataTypes.TEXT,
      allowNull: false
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  location: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null
  },
  clicks: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  views: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  }
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  tableName: 'advertising',
});