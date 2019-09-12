//Including express
const express= require('express')

//Building application
const app=express()

//Handler for get request for homepage
app.get('/',(req,res)=>{
    res.send({'hello':'there'})
})

//Configuring port for our application
const PORT=process.env.PORT || 5000

//Configuring our application to listen to standard node.js port "5000"  
app.listen(PORT)