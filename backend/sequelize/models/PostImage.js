import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

export const PostImage = sequelize.define('PostImage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_post: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'posts_images'
});



