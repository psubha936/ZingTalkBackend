const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'ZingTalk API',
    version: '1.0.0',
    description: 'API documentation for the ZingTalk application',
  },
  servers: [
    {
      url: 'http://localhost:8081/api/v1',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routers/*.js'], // Ensure path is correct relative to where the app runs
};

module.exports = swaggerJSDoc(options);
