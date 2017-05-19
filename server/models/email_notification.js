/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emailNotification', {
    notificationId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'notification_id'
    },
    userNic: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'nic'
      },
      field: 'user_nic'
    },
    emailSubject: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'email_subject'
    },
    emailBody: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'email_body'
    }
  }, {
    tableName: 'email_notification'
  });
};
