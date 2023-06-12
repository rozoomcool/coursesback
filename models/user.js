const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize) => sequelize.define(
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