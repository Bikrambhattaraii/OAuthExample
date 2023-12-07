const express = require("express");
const app=express();
require("./model/index");

app.get('/',(req,res)=>{
    res.send('hello')
})
const PORT= process.env.PORT || 4000
app.listen(PORT,()=>{
   console.log(`"port started at"${PORT}`) 
})