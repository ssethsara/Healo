/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor', {
    doctorId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'doctor_id'
    },
    nic: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'nic'
      },
      field: 'nic'
    },
    regNo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'reg_no'
    },
    specialty: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'specialty'
    }
  }, {
    tableName: 'doctor'
  });
};
