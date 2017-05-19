var express = require('express');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');

var app = express();

var sequelize = new Sequelize('awshealthcare', 'kanishkad', '51711218525a', {
  host: 'awshealthcaredb.c45xtundvtqh.us-west-2.rds.amazonaws.com',
  dialect: 'mysql',
  logging: console.log,

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  define: {
    timestamps: false
    },
}
);


var db = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize["import"](path.join(__dirname, './models'));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;




router.get('/children', function(req, res) {
    childModel.findAll().
    then(function(books) {
        res.status(200).json(books);
    }, function(error) {
        res.status(500).send(error);
    });
});



module.exports = db;



