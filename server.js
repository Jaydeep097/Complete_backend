const express = require('express')

const app = express()

app.get("/", (req, res)=>{
    res.send("hello world from /")
})

app.get("/about",(req,res)=>{
    res.send("this is about page ")
})

app.listen(3000, ()=>{
    console.log("server is live at http://localhost:3000")
})