/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('child', {
    childId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'child_id'
    },
    bloodId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'blood_group',
        key: 'blood_id'
      },
      field: 'blood_id'
    },
    trusteeId: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'user',
        key: 'nic'
      },
      field: 'trustee_id'
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_of_birth'
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'last_name'
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'surname'
    },
    isMale: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'is_male'
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'url'
    }
  }, {
    tableName: 'child'
  });
};