// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Import middlewares
const logger = require('./middleware/logger');
const authenticateToken = require('./middleware/authenticateToken');

// Apply logger globally
app.use(logger);

// Public route (no authentication)
app.get('/public', (req, res) => {
    res.json({ message: 'This is a public route. No authentication required.' });
});

// Protected route (requires token)
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome! You have access to the protected route.' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
