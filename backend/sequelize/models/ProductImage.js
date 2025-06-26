// src/sequelize/models/ProductImage.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const ProductImage = sequelize.define('ProductImage', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_product: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'products_images'
});
