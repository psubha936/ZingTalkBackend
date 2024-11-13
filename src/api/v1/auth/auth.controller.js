const logger = require('../../../utils/logger');
const {authCheck}= require('./auth.service')

const login = async (req,res,next)=>{
    logger.info(JSON.stringify(req.body));
    const name = req.body.name;
    const mobileNo = req.body.mobileNo;
    const mailId = req.body.mailId;
    if(!name) return res.status(400).json({message: 'Name is required'});
    if(!mobileNo && !mailId) return res.status(400).json({message: `${!mobileNo ? 'Mobile number is required' : !mailId ? 'Mail id is required' :'Mobile no or Mail id is required'}`});
    const data = await authCheck(name,mobileNo,mailId);
    console.log('return from internal service',data);
    res.status(200).json({message: 'Login successful', data});
}

module.exports = {login}