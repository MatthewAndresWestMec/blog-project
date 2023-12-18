const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');
require('../config/passport')(passport);

const registerUser = async (req, res) => {
  console.log('reg successful');
  const { first_name, last_name, email, password, password2 } = req.body;
  let errors = [];

  if (!first_name || !last_name || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in all fields' });
  }

  if (password !== password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password needs to be at least 6 characters' });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors, success: false });
  }

  try {
    const user = await User.findOne({ email });

    if (user) {
      errors.push({ msg: 'This email has already been registered' });
      return res.status(400).json({ errors, success: false });
    }

    const newUser = new User({
      first_name,
      last_name,
      email,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) throw err;
        newUser.password = hash;

        try {
          await newUser.save();
          return res
            .status(201)
            .json({ success: true, msg: 'Registration successful' });
        } catch (err) {
          console.error('Error saving user:', err);
          return res
            .status(500)
            .json({ success: false, msg: 'Internal Server Error' });
        }
      });
    });
  } catch (error) {
    console.error('Error checking for existing user:', error);
    return res
      .status(500)
      .json({ success: false, msg: 'Internal Server Error' });
  }
};

const loginUser = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error('Authentication error:', err);
      return res
        .status(500)
        .json({ success: false, msg: 'Internal Server Error' });
    }
    console.log(user);
    if (!user) {
      // Authentication failed
      console.log('Authentication failed');
      return res
        .status(401)
        .json({ success: false, msg: 'Authentication failed' });
    }

    // Authentication successful
    req.logIn(user, (err) => {
      if (err) {
        console.error('Login error:', err);
        return res
          .status(500)
          .json({ success: false, msg: 'Internal Server Error' });
      }
      return res.status(200).json({ success: true, msg: 'Login successful' });
    });
  })(req, res, next);
};

const readUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Error fetching users' });
  }
};

module.exports = { registerUser, loginUser, readUser };
