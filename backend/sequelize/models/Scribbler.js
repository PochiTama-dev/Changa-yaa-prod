import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const Scribbler = sequelize.define('Scribbler', {
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
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    scribbler: {
        type: DataTypes.TINYINT,
        defaultValue: 1
    },
    banner: {
        type: DataTypes.TINYINT,
        defaultValue: 1
    },
    Close: {
        type: DataTypes.TINYINT,
        defaultValue: 1
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'scribblers'
});
