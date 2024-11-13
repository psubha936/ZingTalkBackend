const {generateOtp,sendOtpBySms} = require('../../../services/auth.service')
const logger = require('../../../utils/logger');
const authCheck = async (name,mobileNo=null,email=null)=>{
    const otp = generateOtp();
    console.log(otp);
    logger.info('[Auth Internal Service]',otp);
    const otpBySms = await sendOtpBySms(otp,mobileNo,name)
    console.log('otp comes from service',otpBySms)
    return otpBySms;
}

module.exports = {authCheck}