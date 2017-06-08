/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('givenMedicine', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      
      field: 'id'
    },
    medicine_id: {
      type: DataTypes.STRING,
      allowNull: false,
       references: {
        model: 'medicine',
        key: 'm_id'
      },
      field: 'medicine_id'
    },
     date: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date'
    },
  amount: {
      type: DataTypes.INTEGER(11),
       defaultValue: null,
      field: 'amount'
    
  },
  check_id: {
      type: DataTypes.INTEGER(11),
       allowNull: false,
       references: {
        model: 'doctor_checkup',
        key: 'checkup_id'
      },
      field: 'checkup_id'
    }
  },
  
   {
    tableName: 'givenMedicine'
  });
};
