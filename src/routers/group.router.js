const express = require('express');
const router = express.Router();
router.get('/group', (req, res) => {
  res.send('group Route');
});

module.exports = router;