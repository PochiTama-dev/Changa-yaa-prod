import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const Reason = sequelize.define('Reason', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    reason: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
}, {
    timestamps: false,
    tableName: 'reasons'
});
