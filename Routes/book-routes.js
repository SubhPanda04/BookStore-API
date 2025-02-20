const express = require('express');
const {getAllBooks,getSingleBookById,addNewBook,updateSingleBook,deleteBook} = require('../Controllers/book-controller');

// Create express router
const router = express.Router();

// All the Routes 
router.get('/get', getAllBooks);
router.get('/get/:id', getSingleBookById);
router.post('/add', addNewBook);
router.put('/update/:id', updateSingleBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;
