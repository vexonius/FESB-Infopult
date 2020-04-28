'use strict'
module.exports = (sequelize, DataTypes) => {
  const Office = sequelize.define(
    'Office',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      fullTag: DataTypes.STRING,
      floor: DataTypes.INTEGER,
      doorNumber: DataTypes.INTEGER,
      buildingSection: DataTypes.STRING
    },
    {}
  )
  Office.associate = function(models) {
    // associations can be defined here
  }
  return Office
}
