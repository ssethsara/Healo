

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('allergies', {
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
        model: 'allergieslist',
        key: 'Al_id'
      },
      field: 'allergie_Id'
    },
    chilId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'child',
        key: 'child_id'
      },
      field: 'child_id'
    },
   
  }, {
    tableName: 'allergies'
  });
};

