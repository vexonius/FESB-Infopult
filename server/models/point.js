'use strict'
module.exports = (sequelize, DataTypes) => {
  const Point = sequelize.define(
    'Point',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      x: DataTypes.DECIMAL(10,3),
      y: DataTypes.DECIMAL(10,3),
      orderNumber: DataTypes.INTEGER,
       },
    {}
  )

    Point.associate = function(models) {
      Point.belongsTo(models.Office, 
        { foreignKey: 'idOffice' }
        )
    }

  return Point
}
