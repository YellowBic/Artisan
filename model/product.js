const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  artisanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artisan', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantityAvailable: { type: Number, required: true },
  category: { type: String, required: true },
  images: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
