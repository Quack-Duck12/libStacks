const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// W.I.P Test
const booksPath = path.join(__dirname, '../../data/temp.env.json');
let books = JSON.parse(fs.readFileSync(booksPath, 'utf-8'));


// Search Via Internal ID
router.get('/id/:id', (req, res) => {
    const book = books.find(book => book.identification.ID === req.params.id);
    if (book) { res.json(book); }
    else {
        res.status(404).json({
            error: "Book Not Found"
        });
    }
});
// Search Via ISBN
router.get('/isbn/:isbn', (req, res) => {
    const book = books.find(book => book.identification.isbn === req.params.isbn);
    if (book) { res.json(book); }
    else {
        res.status(404).json({
            error: "Book Not Found"
        });
    }
});
// Search Via ISBN13
router.get('/isbn13/:isbn13', (req, res) => {
    const book = books.find(book => book.identification.isbn13 === req.params.isbn13);
    if (book) { res.json(book); }
    else {
        res.status(404).json({
            error: "Book Not Found"
        });
    }
});
// Search Via Goodreads ID
router.get('/goodreads/:id', (req, res) => {
    const book = books.find(book => book.identification.goodreadsID === req.params.id);
    if (book) { res.json(book); }
    else {
        res.status(404).json({
            error: "Book Not Found"
        });
    }
});


// Return All Books in Lib.
router.get('/', (req, res) => {
    res.json(books);
});

module.exports = router;