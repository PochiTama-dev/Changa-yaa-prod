import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const RequestsImage = sequelize.define('RequestsImage', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_request: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'requests_images'
});
