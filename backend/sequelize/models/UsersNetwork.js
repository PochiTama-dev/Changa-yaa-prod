import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const UsersNetwork = sequelize.define('UsersNetwork', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_network: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    link: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'users_networks'
});
