const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    editRights: {
        type: Boolean,
        default: false, // Set to true if the user has the right to edit their own blog posts
      },
}, { collection: 'Users' });
const User = mongoose.model('User', UserSchema);

module.exports = User;