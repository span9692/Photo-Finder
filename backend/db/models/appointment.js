'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    userId: DataTypes.INTEGER,
    photographerId: DataTypes.INTEGER,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE
  }, {});
  Appointment.associate = function(models) {
    Appointment.belongsTo(models.User, {foreignKey:'userId'});
    Appointment.belongsTo(models.Photographer, {foreignKey:'photographerId'});
  };
  return Appointment;
};
