import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const UsersRank = sequelize.define('UsersRank', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_rank: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'users_ranks'
});
