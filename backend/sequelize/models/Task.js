import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_request: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    task: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    like: {
        type: DataTypes.TINYINT,
        defaultValue: 1
    }
}, {
    timestamps: false,
    tableName: 'tasks'
});
