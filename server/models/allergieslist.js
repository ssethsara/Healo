/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('allergies_list', {
    allergieId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'allergieId'
    },
    allergiesName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'allergies_Name'
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'Description'
    }
  }, {
    tableName: 'allergies_list'
  });
};
