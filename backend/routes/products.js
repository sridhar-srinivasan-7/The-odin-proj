const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get a single product
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
});

// Create a new product
router.post('/', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// Update a product
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
  res.json(product);
});

// Delete a product
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndRemove(id);
  res.json({ message: 'Product deleted successfully' });
});

module.exports = router;