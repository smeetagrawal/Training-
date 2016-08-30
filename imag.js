var express = require('express')
var app = express();



app.use(express.static('images'))

app.get('/',function(req,res)
{
            res.send(`

              <html>
              <body>

              <form action = '/home' method = get />

              enter age : <input type = "text"  name = "age" >
              <input type = "submit"  value = "submit" >

              </body>
              </html>

                `)



})

app.get('/home',function(req,res)
{

             if(req.query.age <= 25)
             {
                  res.send(`<img src = "boy-128.png" >`)
             }
             else if((req.query.age > 26) && (req.query.age<50))
             {

                res.send(`<img src = "male3-128.png" >`)

             }
          else
             {
               res.send(`<img src = "matureman2-128.png" >`)

             }




})



app.listen(1234,function ()
 {
        console.log("hy");

})
