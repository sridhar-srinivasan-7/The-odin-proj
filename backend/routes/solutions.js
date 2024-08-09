const express = require('express');
const router = express.Router();
const Solution = require('../models/Solution');

// Get all solutions
router.get('/', async (req, res) => {
  const solutions = await Solution.find();
  res.json(solutions);
});

// Get a single solution
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const solution = await Solution.findById(id);
  res.json(solution);
});

// Create a new solution
router.post('/', async (req, res) => {
  const solution = new Solution(req.body);
  await solution.save();
  res.json(solution);
});

// Update a solution
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const solution = await Solution.findByIdAndUpdate(id, req.body, { new: true });
  res.json(solution);
});

// Delete a solution
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await Solution.findByIdAndRemove(id);
  res.json({ message: 'Solution deleted successfully' });
});

module.exports = router;