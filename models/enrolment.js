const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => sequelize.define(
  'enrolment',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    grade: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{
    timestamps: false
}
)
