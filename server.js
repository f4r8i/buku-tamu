require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const messagesRouter = require('./src/routes/messages');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', messagesRouter);

// Serve static HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server buku tamu berjalan di http://localhost:${PORT}`);
});
