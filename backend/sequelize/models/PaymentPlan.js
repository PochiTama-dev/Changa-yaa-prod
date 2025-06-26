import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const PaymentPlan = sequelize.define('PaymentPlan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  payment_plan: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false
  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  icon: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null
  }
}, {
  timestamps: false,
  tableName: 'payment_plans',
});