
const express = require('express');
const router = express.Router();

router.post('/api/users/signOut', async (req, res) => {
  req.session = null;

  res.status(200).send({});
});

module.exports = router;
