'use strict'
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define(
    'Person',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      function: DataTypes.STRING,
      title: DataTypes.STRING,
      photoUrl: DataTypes.STRING,
      position: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      departemnt: DataTypes.STRING,
      officeID: DataTypes.INTEGER,
      profilePage: DataTypes.STRING
    },
    {}
  )
  Person.associate = function(models) {
    Person.hasOne(models.Office, { as: 'office'})
  }
  return Person
}
