import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const UsersNotification = sequelize.define('UsersNotification', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_notification: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    },
    reviewed: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    id_post: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    id_user_related: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'users_notifications'
});
