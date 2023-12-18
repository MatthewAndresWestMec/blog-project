// const express = require('express');
// const router = express.Router();
// const { ensureAuthenticated } = require('../config/auth');

// router.get('/main', function (req, res) {
//   if (req.isAuthenticated()) {
//     res.redirect('/main');
//   } else {
//     res.redirect('/');
//   }
// });

// router.get('/main', ensureAuthenticated, (req, res) => {
//   res.render('pages/main', {
//     user: req.user,
//   });
// });

// module.exports = router;
