const twilio = require('twilio');
const config = require('../../config/config');

console.log(config.twilio);

const sendOtpByTwilio = async(otp,mobileNo,Name) =>{
    try {
    const twilioClient = twilio(config.twilio?.accountSid , config.twilio?.authToken);
    console.log('otp is',otp,'mobileNo is',mobileNo,'Name is',Name)
        const message = await twilioClient.messages.create({
            body:`Hello ${Name}, your OTP is ${otp} for ZingTalk Applications`,
            from:config.twilio?.phoneNumber,
            to:'+91'+mobileNo
        })
        return otp
    } catch (error) {
        console.error(`Failed to send otp to ${mobileNo}`, error);
    }
} 

module.exports = {sendOtpByTwilio}