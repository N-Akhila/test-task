process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1/onito_project';

// Connect to the MongoDB database
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

// Define a schema for the user model
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
});

// Create a user model based on the schema
const User = mongoose.model('User', userSchema);

app.use(cors());
app.use(express.json());

// Handle POST requests to create a new user
app.post('/users', async (req, res) => {
  const { firstName } = req.body;

  try {
    const user = new User({ firstName });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Server error');
  }
});
app.get('/', (req, res) => {
    res.send('Server is running');
  });
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error retrieving users:', error);
      res.status(500).send('Server error');
    }
  });
