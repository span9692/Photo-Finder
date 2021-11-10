'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    userId: DataTypes.INTEGER,
    photographerId: DataTypes.INTEGER,
    date: DataTypes.STRING,
    hours: DataTypes.INTEGER
  }, {});
  Appointment.associate = function(models) {
    Appointment.belongsTo(models.User, {foreignKey:'userId'});
    Appointment.belongsTo(models.Photographer, {foreignKey:'photographerId'});
  };
  return Appointment;
};
