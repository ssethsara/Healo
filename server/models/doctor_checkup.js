/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_checkup', {
    checkup_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
     
      

      field: 'checkup_id'
    },
    doctor_id: {
      type: DataTypes.STRING,
      allowNull: false,
       references: {
        model: 'user',
        key: 'nic'
      },
      field: 'doctor_id'
    },
    child_Id: {
      type: DataTypes.STRING,
      allowNull: false,
       references: {
        model: 'child',
        key: 'child_id'
      },
      field: 'child_Id'
    },


     date: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date'
    },
 
  note_Mother: {
      type: DataTypes.STRING,
       
      field: 'note_Mother'
    
  },
  note_Nurse: {
      type: DataTypes.STRING,
       
      field: 'note_Nurse'
    
  },
  note_midwife: {
      type: DataTypes.STRING,
       
      field: 'note_midwife'
    
  },
  
  },
   {
    tableName: 'doctor_checkup'
   
  });
};
