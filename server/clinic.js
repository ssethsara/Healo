var express = require('express');
var router = express.Router();

var models = require("./models");


var date = new Date();



router.get('/injection/search/:name',function(req,res){
  models.injection.findAll({where: ["name like ?", '%' + req.params.name + '%']}).then(function(injection) {
      
  
        res.json(injection);
       
        
  });
});

router.get('/allergie/search/:name',function(req,res){
  models.allergies_list.findAll({where: ["allergies_Name like ?", '%' + req.params.name + '%']}).then(function(allergie) {
      
        console.log("adasf");
        res.json(allergie);
       
        
  });
});


router.get('/allergie/other/:id',function(req,res){
  /*models.child.findOne({where:{childId:parseInt(req.params.id, 10)}}).then(function(child) {
  //  res.send('index', {child});
    res.json(child);
  });*/

 models.allergie.belongsTo(models.allergies_list,{ foreignKey: 'allergie_Id' })
models.allergie.belongsTo(models.child,{ foreignKey: 'childId' })
//models.child.hasMany(models.allergie,{ foreignKey: 'childId' })

  models.allergie.findAll({
    where: {childId:parseInt(req.params.id, 10)},
    include: [{model: models.child},{model: models.allergies_list}],
    
  }).then(function(allergie) {
    // Do something with clientProjectUsers.
    // Which has the client, its projects, and its users.


    res.json(allergie);
  });

});





router.get('/record/:id',function(req,res){
  /*models.child.findOne({where:{childId:parseInt(req.params.id, 10)}}).then(function(child) {
  //  res.send('index', {child});
    res.json(child);
  });*/

//models.medicine.hasMany(models.givenMedicine,{ as: 'jobs', foreignKey: 'id' });





 models.doctor_checkup.belongsToMany(models.medicine,{through: {model: models.givenMedicine},foreignKey: 'check_id'});
models.medicine.belongsToMany(models.doctor_checkup,{through: {model: models.givenMedicine},foreignKey: 'medicine_id'});
 //models.doctor_checkup.hasMany(models.givenMedicine,{foreignKey: 'checkup_id'});
//models.doctor_checkup.belongsTo(models.child,{ foreignKey: 'child_Id' });


 models.doctor_checkup.belongsToMany(models.allergies_list,{through: {model: models.allergie},foreignKey: 'check_id'});
models.allergies_list.belongsToMany(models.doctor_checkup,{through: {model: models.allergie},foreignKey: 'allergieId'});

//models.doctor_checkup.hasMany(models.allergie,{ foreignKey: 'check_id' });



//models.child.hasMany(models.allergie,{ foreignKey: 'childId' })

  models.doctor_checkup.findAll({
    where: {child_Id:parseInt(req.params.id, 10)},
    include: [{model: models.medicine},{model: models.allergies_list}],
    
  }).then(function(record) {
    // Do something with clientProjectUsers.
    // Which has the client, its projects, and its users.

    //medicinejson=record[0]


    res.json(record);
  });

});




router.get('/med/search/:name',function(req,res){
  models.medicine.findAll({where: ["name like ?", '%' + req.params.name + '%']}).then(function(medicine) {
      
        console.log("adasf");
        res.json(medicine);
       
        
  });
});




router.get('/vaccine/details/:id',function(req,res){

  console.log(parseInt(req.params.id,10))
  models.vaccination.findAll({where: {chilId:parseInt(req.params.id,10)}}).then(function(immu) {
      
        
        res.json(immu);
       
        
  });
});



router.post('/vaccination',function(req,res,next){

var found=false;
if(!req.body)
{
  res.status(400);
  res.json({"error":"Bad Data"});
}
else{
  

    
    
    var injection= req.body.injection;
    var childID= req.body.childID;
    var nurseID= req.body.nurseID;
    var remarks= req.body.remarks;

//TEMP

 console.log(injection);
 console.log(remarks);
  console.log(nurseID);
   console.log(childID);

            
      
             models.vaccination.findOrCreate({
                where: {//object containing fields to found
                    injection_name:injection,
                    chil_id:childID
                }, 

          
                 defaults: { 
                        
                        injectionName:injection,
                        chilId:childID,
                        nurseId:nurseID,
                        remarks:remarks,
                 }    
                
            }).spread(function(user, created) {
                console.log(user.get({
                  plain: true
                }))
                console.log(created)

                res.status(300).send({ redirect:"http://localhost:3000"});
                
              });




      }
});


router.post('/childVisit',function(req,res,next){

var found=false;
if(!req.body)
{
  res.status(400);
  res.json({"error":"Bad Data"});
}
else{
  

    
    
    var weight= req.body.weight;
    var height= req.body.height;
    var childID= req.body.childID;
    var midewife_ID= req.body.midwifeID;
    var note_doctor= req.body.note_Doctor;
    var note_mother= req.body.note_Mother;

//TEMP

 console.log(weight ," ",  height ," ",midewife_ID," ",note_doctor," ",childID," ",note_mother);
  

            
      
             models.childVisit.findOrCreate({
                where: {//object containing fields to found
                  
                }, 

          
                 defaults: { 
                        
                        midwifeId:midewife_ID,
                        height:height,
                        weight:weight,
                        childId:childID,
                        Note_For_doctor:note_doctor,
                        Note_For_Mother:note_mother
                         



                 }    
                
            }).spread(function(user, created) {
                console.log(user.get({
                  plain: true
                }))
                console.log(created)

                res.status(300).send({ redirect:"http://localhost:3000"});
                
              });




      }
});





router.post('/sendReport',function(req,res,next){

var found=false;
if(!req.body)
{
  res.status(400);
  res.json({"error":"Bad Data"});
}
else{
  

    var allergies= req.body.allergies;
    var medicines= req.body.medicines;
    var MotherNote= req.body.MotherNote;
    var MidwifeNote= req.body.MidwifeNote;
    var NoteforNurse= req.body.NoteforNurse;
    var childID= req.body.childID;
    var doctorId= req.body.doctorId;
    
   

//TEMP

 console.log(allergies,medicines,MotherNote,MidwifeNote,NoteforNurse,childID,doctorId);


            
      
        /*     models.vaccination.findOrCreate({
                where: {//object containing fields to found
                    injection_name:injection,
                    chil_id:childID
                }, 

          
                 defaults: { 
                        
                        injectionName:injection,
                        chilId:childID,
                        nurseId:nurseID,
                        remarks:remarks,
                 }    
                
            }).spread(function(user, created) {
                console.log(user.get({
                  plain: true
                }))
                console.log(created)

                res.status(300).send({ redirect:"http://localhost:3000"});
                
              });

*/


      }
});


   
    



 





module.exports = router;