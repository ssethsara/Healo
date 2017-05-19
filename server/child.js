var express = require('express');
var router = express.Router();

var models = require("./models");

router.post('/addChild',function(req,res,next){

var found=false;
if(!req.body)
{
  res.status(400);
  res.json({"error":"Bad Data"});
}
else{
  

    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var surname= req.body.surname;
    var dateOfBirth= req.body.dateOfBirth;
    var blood= req.body.blood;
    var gender= req.body.gender;
    var motherid= req.body.motherid;

//TEMP

 


            
            console.log("firstName :");
              console.log(firstName);
              console.log("lastName :");
              console.log(lastName);
              console.log("surname :");
              console.log(surname);
              console.log("dateOfBirth :");
              console.log(dateOfBirth);
              console.log("blood :");
              console.log(blood);
              console.log("motherid :");
              console.log(motherid);
              console.log("gender :");
              console.log(gender);
              

            models.child.findOrCreate({
                where: {//object containing fields to found
                    firstName:firstName,
                    lastName:lastName
                },
                defaults: {//object containing fields and values to apply
                        firstName:firstName,
                        lastName:lastName,
                        surname:surname,
                        dateOfBirth:dateOfBirth,
                        bloodId:blood,
                        isMale:gender,
                        trusteeId: motherid,
                       
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