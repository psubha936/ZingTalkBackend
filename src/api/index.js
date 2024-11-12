const express = require('express');
const router = express.Router();
const authRoutes = require('../routers/auth.router');
const userRoutes = require('../routers/user.router');
const messageRoutes = require('../routers/message.router');
const groupRoutes = require('../routers/group.router');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/messages', messageRoutes);
router.use('/groups', groupRoutes);

module.exports = router;