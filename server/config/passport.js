// passport-config.js
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: false,
        session: true,
      },
      async (email, password, done) => {
        try {
          console.log('Local Strat Works');
          const user = await User.findOne({ email: email });
          console.log(user);
          if (!user) {
            return done(null, false, {
              message: 'That email is not registered',
            });
          }

          // match pass
          const isMatch = await bcrypt.compare(password, user.password);

          if (isMatch) {
            console.log(email + ' ' + password);
            console.log(user);
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        } catch (err) {
          return done(err, false, { message: 'An error occurred' });
        }
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(err, null);
      });
  });
};
