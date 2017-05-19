/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('injection', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      field: 'name'
    },
    ageGiven: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'age_given'
    },
    sideEffects: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'side_effects'
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'remarks'
    }
  }, {
    tableName: 'injection'
  });
};
