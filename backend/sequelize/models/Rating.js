import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const Rating = sequelize.define('Rating', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_contracting_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_contracted_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_reason: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    stars: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    id_scribbler: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'ratings'
});
