/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mother', {
    motherId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'mother_id'
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
    doctorId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'doctor',
        key: 'doctor_id'
      },
      field: 'doctor_id'
    },
    midwifeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'midwife',
        key: 'midwife_id'
      },
      field: 'midwife_id'
    }
  }, {
    tableName: 'mother'
  });
};
