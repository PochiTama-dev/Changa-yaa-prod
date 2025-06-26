import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const RatingsTask = sequelize.define('RatingsTask', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_task: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    liked: {
        type: DataTypes.TINYINT,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'ratings_tasks'
});
