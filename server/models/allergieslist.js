/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('allergies_list', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'Al_id'
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
