const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    role: {
        type: DataTypes.ENUM("TEACHER", "STUDENT", "ADMIN"),
        allowNull: false
    }
}, 
// {
//   defaultScope: {
//     attributes: {
//       exclude: ['updatedAt']
//     }
//   }
//   }
)