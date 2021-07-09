const express = require('express')
const app  = express()
const port = process.env.PORT || 1420

app.get('/',(req,res)=>{
    res.send('<center> <h1 style="color:blue"> Welcome to My Youtube Channel </h1> </center>')
})


app.listen(port,()=>{
    console.log(`application is running on port ${port}`)
})