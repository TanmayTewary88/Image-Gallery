// server.js

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://TanmayTewary:<sTzkLWSGh5x9wrvi>@cluster0.wwr7u1u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });

// Define a User schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

// Create a User model
const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Signup route
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.json({ success: false, message: 'Email already exists!' });
    }

    // Create a new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.json({ success: true });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
