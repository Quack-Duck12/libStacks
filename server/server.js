
const express = require('express');
const path = require('path');

const bookRouter = require('./routes/book.js');

const app = express();
const PORT = 9898;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/book', bookRouter);

app.get('/api', (req, res) => {
    res.status(400).json({ error: 'Invalid API endpoint. Try /api/books' });
});

app.listen(PORT, () => {
    console.log(`App Listing on localhost:${PORT}`);
})