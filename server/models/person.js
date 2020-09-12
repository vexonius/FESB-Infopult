'use strict'
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define(
    'Person',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      function: DataTypes.STRING,
      title: DataTypes.STRING,
      photoUrl: DataTypes.STRING,
      position: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      departemnt: DataTypes.STRING,
      officeID: DataTypes.STRING,
      profilePage: DataTypes.STRING
    },
    {}
  )
  Person.associate = function(models) {
    
  }
  return Person
}
