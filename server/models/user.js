/* jshint indent: 2 */
var bcrypt=require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    nic: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      field: 'nic'
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'last_name'
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'address'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'email'
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'mobile'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password'
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'role_id'
    }
  },
  {
    tableName:'user',
   
  } );
  
}




