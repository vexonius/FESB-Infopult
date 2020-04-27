"use strict";
module.exports = (sequelize, DataTypes) => {
  const Office = sequelize.define(
    "Office",
    {
      id: DataTypes.STRING,
      fullTag: DataTypes.STRING,
      floor: DataTypes.NUMBER,
      doorNumber: DataTypes.NUMBER,
      buildingSection: DataTypes.STRING
    },
    {}
  );
  Office.associate = function(models) {
    // associations can be defined here
  };
  return Office;
};
