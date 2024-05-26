const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['artisan', 'customer'], required: true },
  profilePicture: String,
  biography: String
});

module.exports = mongoose.model('User', userSchema);
