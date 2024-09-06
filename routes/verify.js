const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send('Acess Denied')
    }
    try{
        const verify = jwt.verify(token,process.env.TOKEN)
        req.user = verify
        next()
    }catch(e){
        res.status(400).send("Invalid Token")   
    }
}