'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    portfolio: DataTypes.INTEGER,
    url: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(modes.Photographer, {foreignKey: 'portfolioId'})
  };
  return Photo;
};
