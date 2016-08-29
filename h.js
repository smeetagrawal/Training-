var express = require ('express');
 var app = express();


 app.get('/',function (req,res)
  {

        console.log(req.query.name);

        res.send(`
          <html>
          <body>

          <form action = '/home'  method = get />
          enter name : <input type = "text" name = "name">
          enter year  : <input type = "number" name = "age">


          <input type = "submit" value = "submit" >


          </body>
          </html>




          `)

 });

 app.get('/home',function (req,res)
  {
          var year = 2016;
          var w = year - req.query.age ;

         res.send("hello world" +  req.query.name + "age  is "  +  w);


 });




 app.listen(3000,function ()
  {
            console.log("hello world");

 })
