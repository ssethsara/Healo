

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('allergie', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    date: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date'
    },
    allergieId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'allergies_list',
        key: 'allergieId'
      },
      field: 'allergieId'
    },
    childId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'child',
        key: 'childId'
      },
      field: 'child_id'
    },
    check_id: {
      type: DataTypes.INTEGER(11),
       allowNull: false,
       references: {
        model: 'doctor_checkup',
        key: 'checkup_id'
      },
      field: 'check_id'
    }
  },
   
   {
    tableName: 'allergies'
  });
};

