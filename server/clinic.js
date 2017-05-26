var express = require('express');
var router = express.Router();

var models = require("./models");


var date = new Date();



router.post('/vaccination',function(req,res,next){

var found=false;
if(!req.body)
{
  res.status(400);
  res.json({"error":"Bad Data"});
}
else{
  

    
    var date = date.getDate();
    var injection= req.body.injection;
   // var childID= req.body.childID;
    //var nurseID= req.body.nurseID;
    var remarks= req.body.remarks;

//TEMP

 


            
      
              

            models.vaccination.Create({
                
                        date:date,
                        injection_name:injection,
                        chil_id:1,
                        nurse_id:1,
                        remarks:remarks,
                        
                
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