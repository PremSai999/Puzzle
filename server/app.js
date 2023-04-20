const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());
// Replace with your MongoDB connection string
const uri =   process.env.DB_URL;
mongoose.connect(uri, { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});
const User = mongoose.model('User', userSchema);

app.post('/login', async (req, res) => {
    console.log("server");
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user && user.password === req.body.password) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/signup', async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.listen(3000);