/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('midwifeAllocation', {
    allocationId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'allocation_id'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date'
    },
    nurseId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'nurse',
        key: 'nurse_id'
      },
      field: 'nurse_id'
    },
    motherId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'mother',
        key: 'mother_id'
      },
      field: 'mother_id'
    },
    midwifeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'midwife',
        key: 'midwife_id'
      },
      field: 'midwife_id'
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'remarks'
    }
  }, {
    tableName: 'midwife_allocation'
  });
};
