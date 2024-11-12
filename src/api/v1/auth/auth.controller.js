const login = (req,res,next)=>{
    res.status(200).json({message: 'Login successful'});
}

module.exports = {login}