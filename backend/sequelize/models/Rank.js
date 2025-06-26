import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const Rank = sequelize.define('Rank', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rank: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    points: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    icon: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'ranks'
});
