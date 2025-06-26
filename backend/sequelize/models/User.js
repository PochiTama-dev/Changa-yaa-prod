import { DataTypes } from "sequelize";
import sequelize from "../config/config.js";

export const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      onUpdate: DataTypes.NOW,
    },
    banned: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    pass: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    legend: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    alternative_address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    alternative_location: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    alternative_latitude: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    alternative_longitude: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    front_document: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    banner: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    availability: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: null,
    },
    resetCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resetCodeExpires: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "users",
  }
);
