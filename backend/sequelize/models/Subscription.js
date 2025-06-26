import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const Subscription = sequelize.define('Subscription', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    subscription: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'subscriptions'
});
