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

          <input type = "submit" value = "submit" >


          </body>
          </html>




          `)

 app.get('/home',function (req,res)
  {

         res.send("hello world" + req.query.name );

 })


 });

 app.listen(3000,function ()
  {
            console.log("hello world");

 })
