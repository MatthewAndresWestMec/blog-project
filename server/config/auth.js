const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.flash('error_msg', 'please login to view this resource');
    return res.redirect('/');
  }
};

module.exports = { ensureAuthenticated };
