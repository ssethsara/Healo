var express = require('express');
var router = express.Router();

var models = require("./models");



/* GET home page. */
router.get('/child', function(req, res) {
  models.child.all().then(function(child) {
  //  res.send('index', {child});

    

    res.setHeader('Content-Type', 'application/json');
    res.json(child);
    
  });
});


router.get('/child/search/:name',function(req,res){
  models.child.findAll({where: ["first_name like ?", '%' + req.params.name + '%']}).then(function(child) {
      
  
        res.json(child);
       
        
  });
});


router.get('/child/:id',function(req,res){
  /*models.child.findOne({where:{childId:parseInt(req.params.id, 10)}}).then(function(child) {
  //  res.send('index', {child});
    res.json(child);
  });*/

 models.child.belongsTo(models.user ,{ foreignKey: 'trusteeId' })
models.child.hasOne(models.bloodGroup ,{ foreignKey: 'blood_id' })
models.child.hasMany(models.childVisit ,{ foreignKey: 'child_id' })

  models.child.findOne({
    where: {childId:parseInt(req.params.id, 10)},
    include: [{model: models.user},{model: models.bloodGroup},{model: models.childVisit, limit: 1, order: [['date', 'DESC']]}],
    
  }).then(function(childParent) {
    // Do something with clientProjectUsers.
    // Which has the client, its projects, and its users.





    res.json(childParent);
  });




});



/*router.post('/login', function(req, res) {
  models.user
        .build({
            title: req.body.taskName,
            completed: false})
        .save()
       
});

router.put('/login/:id', function(req, res) {
  models.Tasks.find({
    where: {
      id: req.params.id
    }
  }).then(function(task) {
    if(task) {
      task.updateAttributes({
        title: req.body.title,
        completed: req.body.completed
      }).then(function(task) {
        res.send(task);
      });
    }
  });
});

*/

router.delete('/task/:id', function(req, res) {
  models.Tasks.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(task) {
    res.json(task);
  });
});




router.get('/works',function(req,res,next){
  res.send('api works');
});

module.exports = router;