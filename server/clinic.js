var express = require('express');
var router = express.Router();

var models = require("./models");


var date = new Date();



router.get('/injection/search/:name',function(req,res){
  models.injection.findAll({where: ["name like ?", '%' + req.params.name + '%']}).then(function(injection) {
      
  
        res.json(injection);
       
        
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
                  //  injection_name:injection,
                    chil_id:1
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


   
    



 





module.exports = router;