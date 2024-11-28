const twilio = require('twilio');
const nodeMailer = require('nodemailer');
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

const sendOtpByNodemailer = async (otp,mail,name)=>{
    try {
        const transporter  = nodeMailer.createTransport({
            service:'gmail',
            auth:{
                user:config.mail.userMail,
                pass:config.mail.userPassword
            }
        });
        const mailOtions = {
            from: `"ZingTalk" <${config.mail.user}>`,
            to: mail, 
            subject: "Your Zingtalk OTP Code",
            html: `
              <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2>Hello, ${name}!</h2>
                <p>We received a request to verify your email address. Use the OTP below to complete the verification process:</p>
                <div style="text-align: center; font-size: 1.5em; font-weight: bold; margin: 20px 0;">
                  ${otp}
                </div>
                <p>If you did not request this, please ignore this email.</p>
                <br />
                <p>Best regards,</p>
                <p><strong>Your App Team</strong></p>
              </div>
            `,
          };
        const info = await transporter.sendMail(mailOtions);
        console.log("Email sent: %s", info);
        return otp
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

module.exports = {sendOtpByTwilio, sendOtpByNodemailer}