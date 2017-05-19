
var express = require('express');
var router = express.Router();

var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;

var bcrypt = require("bcryptjs");

//register

var models = require("./models");


var userId;

router.use(passport.initialize());
router.use(passport.session());

SALT_WORK_FACTOR=12;


router.post('/signup',function(req,res,next){

var found=false;
if(!req.body)
{
  res.status(400);
  res.json({"error":"Bad Data"});
}
else{
  
    var firstname= req.body.firstName;
    var lastname= req.body.lastName;
    var email= req.body.email;
    var nicNo= req.body.nic;
    var password=  req.body.password;
    var conPassword= req.body.password2;
    var address= req.body.address;
    var phone= req.body.phoneNo;
    var role= req.body.role;

//TEMP

 
  



   bcrypt.genSalt(10,function(err,salt){
   bcrypt.hash(password,salt,function(err,hash){
   password=hash;
   encryptPassword=hash;
   

            
            console.log("encryptPassword :");
              console.log(encryptPassword);
              

            models.user.findOrCreate({
                where: {//object containing fields to found
                    email: email,
                    nic:nicNo,
                },
                defaults: {//object containing fields and values to apply
                        email:email,
                        nic:nicNo,
                        firstName:firstname,
                        lastName:lastname,
                        address:address,
                        phoneNumber: phone,
                        password: encryptPassword,
                        role:role
                }
            }).spread(function(user, created) {
                console.log(user.get({
                  plain: true
                }))
                console.log(created)

               res.status(300).send({ redirect:"http://localhost:3000/users/login"});

                
              });




      });
   });

   
    


}
});
 






//serialize session
passport.serializeUser(function(user, done) {
  done(null, user);
});


//deserialize session
passport.deserializeUser(function(user, done) {
  models.user.find({where:{nic:user.nic}}).then(function(user) {
    
    done(null, user);
  }).error(function(err){
      done(err,null)
  });
});


//for Autontication

passport.use(new LocalStrategy(
  {usernameField:"email", passwordField:"password"},
  function(email,password,done){

    console.log(email);
    console.log(password);

     models.user.findOne({where:{email:email}}).then(function (user) {
      if (!user) {

        console.log('Incorrect User Name')
        return done(null, false, { message: 'Incorrect username.' });
      }
      else{
        bcrypt.compare(password,user.password,function(err,isMatch){

            if(err)throw err;
            if(!isMatch)
            {
              console.log('incorrect password')
               return done(null, false, { message: 'Incorrect password.' });
            }
            else{
              console.log('access granted')
              return done(null, user);
            }
        });
      }
    
      
  }).error(function(err){
                  done(err,null)
              });
  }
));


router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(res.user);  
  });





router.get('/auth/data',isLoggedIn, function(req, res) {
   // models.findById(req.user, function(err, fulluser) {
     
         res.json(req.user);
     
});
    




function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.json(false);
    }
};



router.post('/auth/logout',isLoggedIn,function(req, res){
  console.log('logout');
  req.logout();
  res.json(true);
  
});

module.exports = router;