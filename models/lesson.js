const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => sequelize.define(
  'lesson',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    material: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
)
