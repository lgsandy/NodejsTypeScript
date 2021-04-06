import express from 'express';
import appRoutert from './routs/routs';
const app=express();

app.use('/app',appRoutert);
app.get('/',(req,res)=>{
    res.send("Hello app from Node js");
})

app.listen(5000,()=>console.log('Server started at 5000'));