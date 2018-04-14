var express = require('express');
var mysql = require('mysql');
var app = express();
app.set('view engine','ejs');
var ecma;

app.get('/register',function(req,res){
  var con = mysql.createConnection({host:"127.0.0.1",user:"root",password:"",database:"smeet"});
  con.connect(function(error){
    if(error){
      console.log(error);
    }
    else {
      console.log("connection created succesfully");
    }



   con.query("select EMAIL from registeration where EMAIL = ?",[req.query.emailid],function(error,result,fields)
  {
    if(error)
    {
      console.log(error)
    }
    else{
        console.log("data retrieved succesfully");
        console.log(result);

    }

//    ecma =result.length;

  });




  });
  // if(ecma === 0){
  //
  // res.render("register");
  // }
  // else {
  //   res.render("register",{data3:"please use another email id"});
  // }

res.render('register');


});

app.get('/login',function(req,res)
{
var con = mysql.createConnection({host:"127.0.0.1",user:"root",password:"",database:"smeet"});
if(req.query.password === req.query.cpassword)
{

con.connect(function(error){
  if(error){
    console.log(error);
  }
  else {
    console.log("connection created succesfully");
  }

 var data={
   FIRSTNAME:req.query.fname,
   LASTNAME:req.query.lname,
   EMAIL:req.query.emailid,
   PASSWORD:req.query.password
 }


 con.query("insert into registeration SET ?",data,function(error,result,fields)
{
  if(error)
  {
    console.log(error)
  }
  else{
      console.log("data inserted succesfully");
      console.log(result);
  }

});



});

res.render('login',);
}
else {
  res.redirect('register');
}

});


app.get('/check',function(req,res){

  var con = mysql.createConnection({host:"127.0.0.1",user:"root",password:"",database:"smeet"});
  con.connect(function(error){
    if(error){
      console.log(error);
    }
    else {
      console.log("connection created succesfully");
    }



   con.query("select * from registeration where EMAIL = ? AND PASSWORD = ?",[req.query.loemailid,req.query.lopassword],function(error,result,fields)
  {
    if(error)
    {
      console.log(error)
    }
    else{
        console.log("data retrieved succesfully");
        console.log(result);

    }
    var temp = result[0].FIRSTNAME;
    var temp1 = result[0].LASTNAME;
    var temp2 = result[0].id;

    if(result.length === 0)
    {
      res.render('register');
    }
    else{
      res.render('success',{data1:temp,data2:temp1,data3:temp2});
    }



  });





  });



})


app.get('/upt',function(req,res){
  var con = mysql.createConnection({host:"127.0.0.1",user:"root",password:"",database:"smeet"});
  con.connect(function(error){
    if(error){
      console.log(error);
    }
    else {
      console.log("connection created succesfully");
    }



   con.query("update registeration SET FIRSTNAME = ? AND LASTNAME = ? WHERE id = ? ",[req.query.sfname,req.query.slname,req.query.id],function(error,result,fields)
  {
    if(error)
    {
      console.log(error)
    }
    else{
        console.log("data retrieved succesfully");
        console.log(result);
        console.log(req.query.id);

    }




})



  });
  res.end();

});
















app.listen(1111,function(req,res)
{
  console.log("server started 1111");
});
