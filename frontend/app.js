const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/sri-varaha', { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes
const productRoutes = require('../backend/routes/products');
const solutionRoutes = require('../backend/routes/solutions');

// Use body-parser middleware
app.use(bodyParser.json());

// Define API routes
app.use('/api/products', productRoutes);
app.use('/api/solutions', solutionRoutes);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});