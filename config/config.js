// require('dotenv').config();

// module.exports = {
//   port: process.env.PORT || 8081,
//   db: {
//     mongoURI: process.env.MONGO_URI,
//   },
//   jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
// };
// config/config.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 8081,
};
