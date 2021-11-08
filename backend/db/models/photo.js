'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    portfolioId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.Photographer, {foreignKey: 'portfolioId'})
  };
  return Photo;
};
