const express= require("express")

const app= express()

app.get("/sayHello",(req,res)=>{
    res.status(200).send({message:"Hello User"})
})

app.listen(80,()=>{
    console.log("server started running");
})