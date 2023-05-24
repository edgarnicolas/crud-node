const express = require("express");
const blogRouter = require("./routes/BlogRoutes");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());

app.listen(3001, ()=>{
    console.log("Server is running on port 3001");
});

app.use("/api/blogs", blogRouter);

//Configure mongoose
try{

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

}catch(err){
    res.status(500).json({error:err.message});
}

module.exports = app;

