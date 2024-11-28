const {generateOtp,sendOtpBySms, sendOtpByGmail} = require('../../../services/auth.service')
const logger = require('../../../utils/logger');
const otpStore ={
    "sms":0,
    "email":0
}
const authCheck = async (name,mobileNo=null,email=null)=>{
    const otp = generateOtp();
    console.log(otp);
    logger.info('[Auth Internal Service]',otp);
    if(mobileNo){
        otpStore.sms = await sendOtpBySms(otp,mobileNo,name)
    }
    if(email){
        otpStore.email = await sendOtpByGmail(otp,email,name)
    }

    console.log('otp comes from service',otpStore)
    return otpStore;
}

module.exports = {authCheck}