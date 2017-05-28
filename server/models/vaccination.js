/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vaccination', {
    vaccinationId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'vaccination_id'
    },
    date: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date'
    },
    injectionName: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'injection',
        key: 'name'
      },
      field: 'injection_name'
    },
    chilId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'child',
        key: 'child_id'
      },
      field: 'chil_id'
    },
    nurseId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'nurse',
        key: 'nurse_id'
      },
      field: 'nurse_id'
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue:'NO Remarks',
      field: 'remarks'
    }
  }, {
    tableName: 'vaccination'
  });
};
