"use strict";
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define(
    "Person",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      function: DataTypes.STRING,
      title: DataTypes.STRING,
      photoUrl: DataTypes.STRING,
      position: DataTypes.STRING,
      phone: DataTypes.NUMBER,
      departemnt: DataTypes.STRING,
      officeID: DataTypes.STRING,
      profilePage: DataTypes.STRING
    },
    {}
  );
  Person.associate = function(models) {
    // associations can be defined here
  };
  return Person;
};
