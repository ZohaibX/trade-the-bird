
const express = require('express');
const router = express.Router();

router.get('/api/users/signOut', async (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/"); // change this route 
});

module.exports = router;
