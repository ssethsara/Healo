/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('midwife', {
    midwifeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'midwife_id'
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
    }
  }, {
    tableName: 'midwife'
  });
};
