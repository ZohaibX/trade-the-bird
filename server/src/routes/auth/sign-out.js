
const express = require('express');
const router = express.Router();

router.get('/api/users/signOut', async (req, res) => {
  req.session = null;
  req.logout();
  // res.redirect("/"); // redirect for passport auth
  res.send("Signed Out") 
});

module.exports = router;
