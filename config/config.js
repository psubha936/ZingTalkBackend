// require('dotenv').config();

// module.exports = {
//   port: process.env.PORT || 8081,
//   db: {
//     mongoURI: process.env.MONGO_URI,
//   },
//   jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
// };
// config/config.js
const dotEnv = require('dotenv').config();
module.exports = {
  port: process.env.PORT || 8081,
  db:{
    mongoURI: process.env.MONGO_URI
  },
  twilio:{
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    phoneNumber: process.env.TWILIO_MOBILE_NO
  },
  mail:{
    userMail:process.env.EMAIL_USER,
    userPassword:  process.env.EMAIL_PASS,
    user:process.env.USER_EMAIL
  }
};
