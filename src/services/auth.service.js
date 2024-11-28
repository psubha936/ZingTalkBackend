const {sendOtpByTwilio, sendOtpByNodemailer} = require('../utils/otpSender');

const generateOtp = () =>{
    return Math.floor(100000 + Math.random() * 900000);
}

const sendOtpBySms = async (otp,mobileNo,name)=>{
    return await sendOtpByTwilio(otp,mobileNo,name)
}

const sendOtpByGmail = async (otp,mail,name)=>{
    return await sendOtpByNodemailer(otp,mail,name);
}

module.exports = {generateOtp ,sendOtpBySms, sendOtpByGmail}