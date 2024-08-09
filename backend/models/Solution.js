const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String
});

const Solution = mongoose.model('Solution', solutionSchema);

module.exports = Solution;