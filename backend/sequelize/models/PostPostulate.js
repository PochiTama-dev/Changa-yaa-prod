import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const PostPostulate = sequelize.define('PostPostulate', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_post: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_postulate: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    enable: {
        type: DataTypes.TINYINT,
        defaultValue: 1
    }
}, {
  timestamps: false,
  tableName: 'posts_postulates'
});


