const express = require("express");
const router = express.Router();

router.use('/',(req,res)=>{
    res.cookie('greenRankCurrentUser0001','',{maxAge:0});
    // return res.redirect('/');
    return;
})

module.exports = router;