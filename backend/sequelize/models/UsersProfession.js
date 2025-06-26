import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const UsersProfession = sequelize.define('UsersProfession', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_profession: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'users_professions'
});