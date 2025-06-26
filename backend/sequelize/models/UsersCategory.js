import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const UsersCategory = sequelize.define('UsersCategory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_category: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'users_categories'
});