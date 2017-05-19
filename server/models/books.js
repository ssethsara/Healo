/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    bookName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'bookName'
    },
    bookPrice: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'bookPrice'
    }
  }, {
    tableName: 'books'
  });
};
