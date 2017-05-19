/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bloodGroup', {
    blood_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'blood_id'
    },
    blood_type: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'blood_type'
    },
   
  }, {
    tableName: 'blood_group'
  });
};
