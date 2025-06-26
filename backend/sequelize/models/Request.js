import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const Request = sequelize.define('Request', {
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
    id_post: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_profession: {
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
    note: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    enabled: {
        type: DataTypes.TINYINT,
        defaultValue: 1
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'requests'
});
