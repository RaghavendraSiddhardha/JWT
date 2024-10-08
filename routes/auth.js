const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
// const dotenv = require('dotenv')
const {registerValidation,loginValidation} = require('../validation')

router.post('/register',async (req,res)=>{

    const {error} = registerValidation(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }

    const emailExists = await User.findOne({email:req.body.email})
    if(emailExists){
        return res.status(400).send("Email Already Exists")
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password,salt)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    })
    try{
        const savedUser = await user.save();
        res.send({user:User._id})
    }catch(e){
        res.status(400).send(err);
    }
})

router.post('/login',async (req,res)=>{
    const {error} = loginValidation(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    const user = await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).send("Email does not Exists")
    }
    const validPassword = await bcrypt.compare(req.body.password,user.password)
    if(!validPassword){
        return res.status(400).send("Invalid Password/Email")
    }

    const token = jwt.sign({_id: user._id}, process.env.TOKEN)
    res.header('auth-token',token).send(token)

    // res.send("Successfully Loged in")
})


module.exports = router;