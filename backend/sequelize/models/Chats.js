import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const Chat = sequelize.define('Chat', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_sender_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_receiver_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    banned: {
        type: DataTypes.TINYINT,
        defaultValue: 0
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    image_reference: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    video_reference: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    audio_reference: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    reviewed: {
        type: DataTypes.TINYINT,
        defaultValue: 0
    },
    id_sender_user_delete: {
        type: DataTypes.TINYINT,
        defaultValue: 0
    },
    id_receiver_user_delete: {
        type: DataTypes.TINYINT,
        defaultValue: 0
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'chats'
});


