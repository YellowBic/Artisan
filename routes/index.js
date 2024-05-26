const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Artisan = require('../models/artisan');
const Customer = require('../models/customer');
const Product = require('../models/product');
const Review = require('../models/review');
const Order = require('../models/order');
const OrderItem = require('../models/orderItem');

// GET home page
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// API endpoints for users
router.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// API endpoints for products
router.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add more routes for artisans, customers, reviews, orders, and orderItems
// API endpoints for artisans
router.post('/api/artisans', async (req, res) => {
  try {
    const artisan = new Artisan(req.body);
    await artisan.save();
    res.status(201).send(artisan);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/api/artisans', async (req, res) => {
  try {
    const artisans = await Artisan.find();
    res.status(200).send(artisans);
  } catch (error) {
    res.status(500).send(error);
  }
});

// API endpoints for customers
router.post('/api/customers', async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).send(customer);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/api/customers', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).send(customers);
  } catch (error) {
    res.status(500).send(error);
  }
});

// API endpoints for reviews
router.post('/api/reviews', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).send(review);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
});

// API endpoints for orders
router.post('/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
});

// API endpoints for orderItems
router.post('/api/orderItems', async (req, res) => {
  try {
    const orderItem = new OrderItem(req.body);
    await orderItem.save();
    res.status(201).send(orderItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/api/orderItems', async (req, res) => {
  try {
    const orderItems = await OrderItem.find();
    res.status(200).send(orderItems);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
