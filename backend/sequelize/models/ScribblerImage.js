import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const ScribblerImage = sequelize.define('ScribblerImage', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_scribbler: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'scribblers_images'
});
