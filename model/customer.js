const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  shippingAddress: { type: String, required: true },
  billingInformation: { type: String, required: true },
  paymentMethods: { type: String, required: true }
});

module.exports = mongoose.model('Customer', customerSchema);
