const express = require('express');
const router = express.Router();

router.get('/message', (req, res) => {
  res.send('Message Route');
});

module.exports = router;