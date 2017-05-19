/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('childVisit', {
    visitId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'visit_id'
    },
    date: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date'
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
    height: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'height'
    },
    weight: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'weight'
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'remarks'
    },
    childId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'child',
        key: 'child_id'
      },
      field: 'child_id'
    }
  }, {
    tableName: 'clinic_visit'
  });
};
