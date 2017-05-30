var express = require('express');
var router = express.Router();

var models = require("./models");


var date = new Date();



router.get('/injection/search/:name',function(req,res){
  models.injection.findAll({where: ["name like ?", '%' + req.params.name + '%']}).then(function(injection) {
      
  
        res.json(injection);
       
        
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
    var midewife_ID= req.body.midewifeID;
    var note_doctor= req.body.noteForDoctor;
    var doctor_ID= req.body.doctorID;
    var note_mother= req.body.noteForMother;

//TEMP

 console.log(weight ," ",  height ," ",midewife_ID," ",not_doctor," ",doctor_ID," ",not_mother);
  

            
      
             models.childVisit.findOrCreate({
                where: {//object containing fields to found
                  
                }, 

          
                 defaults: { 
                        
                        midwifeId:midewife_ID,
                        height:height,
                        weight:weight,
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

   
    



 





module.exports = router;