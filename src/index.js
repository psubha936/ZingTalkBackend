const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../docs/swagger');
const logger = require('./utils/logger');
const config = require('../config/config');
const apiRoutes = require('./api');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('combined',{logger:logger.stream}));

// API routes

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/v1', apiRoutes);

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to the ZingTalk API</h1><p>Explore the API at <a href="/api-docs">/api-docs</a></p>');
});

app.use((req,res)=>{
    res.status(404).send('<h1>404 - Page Not Found</h1><p>Check the API documentation at <a href="/api-docs">/api-docs</a></p>');
});

app.listen(config.port,()=>{
    logger.info(`Server running on port ${config.port}`);
})