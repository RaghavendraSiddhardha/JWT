const router = require('express').Router()
const User = require('../models/User')
const verify = require('./verify')
router.get('/',verify,(req,res)=>{
    res.send(req.user)
    User.findbyOne({_id:req.user})
})

module.exports = router;