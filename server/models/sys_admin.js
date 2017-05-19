/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysAdmin', {
    adminId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'admin_id'
    },
    nic: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'nic'
      },
      field: 'nic'
    }
  }, {
    tableName: 'sys_admin'
  });
};
