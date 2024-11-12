const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  res.send('User Route');
});

module.exports = router;