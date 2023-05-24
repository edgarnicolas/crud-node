const mongoose = require('mongoose');


const url = 'mongodb://127.0.0.1/CRUD'; // Replace with your MongoDB connection string
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, options);

// Event listeners for successful connection and error
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB successfully!');
  // Additional code to perform database operations can be added here
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});




