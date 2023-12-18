const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const session = require('express-session');
const userController = require('./routes/user-route');
const blogController = require('./routes/blog-route');
const connectDB = require('./db/connect');
const port = 5000;
const passport = require('passport');

app.use(
  session({ secret: 'your-secret-key', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

// Body Parser
app.use(express.urlencoded({ extended: false }));

// CheckPath
app.get('/', (req, res) => {
  res.send('server is working');
});

//routes
// app.use('/people',peopleController)
app.use('/api/blogs', blogController);
app.use('/api/users', userController);
const initServer = async () => {
  try {
    await connectDB(
      'mongodb+srv://mandre361:1234@matthewcluster.chtewfp.mongodb.net/Blog-Project'
    );
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
initServer();
