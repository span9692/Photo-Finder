'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photographer = sequelize.define('Photographer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    biography: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Photographer.associate = function(models) {
    Photographer.hasMany(models.Review, {foreignKey:'photographerId', onDelete: 'cascade', hooks: true});
    Photographer.hasMany(models.Appointment, {foreignKey:'photographerId', onDelete: 'cascade', hooks: true})
  };
  return Photographer;
};
