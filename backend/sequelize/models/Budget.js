import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const Budget = sequelize.define('Budget', {
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  id_buyer: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
  id_seller: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
  id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
  units: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  enabled: {
      type: DataTypes.TINYINT,
      defaultValue: 1
  }
}, {
  timestamps: false,
  tableName: 'budgets',
});
