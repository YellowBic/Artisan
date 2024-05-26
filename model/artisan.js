const mongoose = require('mongoose');

const artisanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  shopName: { type: String, required: true },
  shopDescription: { type: String, required: true },
  location: { type: String, required: true },
  socialMediaLinks: String
});

module.exports = mongoose.model('Artisan', artisanSchema);
