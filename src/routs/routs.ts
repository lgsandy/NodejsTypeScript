import express from 'express';
const router =express.Router();

router.get('/',(req,res)=>{
    res.send("from roiuter page");
})

export default router;
