const Book = require('../Models/book');

const getAllBooks = async(req,res)=> {
    try {
        const allBooks = await Book.find({});
        if(allBooks?.length>0) {
           res.status(200).json({
            success : true,
            message : 'List of books fetched successfully',
            data : allBooks
           })
        } else {
            res.status(404).json({
                success : true,
                message : "Books not found"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : "Something went wrong! Please try again"
        })
    }
}

const getSingleBookById = async(req,res)=> {
   try {
        const getCurrentBookId = req.params.id;
        const bookDetailsById = await Book.findById(getCurrentBookId);
        if(bookDetailsById) {
            res.status(200).json({
                success : true,
                message : "Book fetched successfully",
                data : bookDetailsById
            })
        } else {
            res.status(404).json({
                success : false,
                message : "Book not found"
            })
        }
   } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : "Something went wrong! Please try again"
        })
   } 
}

const addNewBook = async(req,res)=> {
    try{
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        if(newlyCreatedBook) {
           res.status(200).json({
            success : true,
            message : 'Book added successfully',
            data : newBookFormData
           }) 
        }
    }catch(e) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : "Something went wrong! Please try again"
        }) 
    }
}

const updateSingleBook = async(req,res)=> {
    try {
       const updatedBookFormData  = req.body;
       const getToBeUpdatedBookId = req.params.id;
       const updatedBook = await Book.findByIdAndUpdate(getToBeUpdatedBookId,updatedBookFormData, {
        new : true
       });
       if(!updatedBook) {
            res.status(404).json({
                success : false,
                message : "Book not found",
            })
       } else {
        res.status(200).json({
            success : true,
            message : "Book updated successfully",
            data : updatedBook
        })
       }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : "Something went wrong! Please try again"
        })
    }   
}

const deleteBook = async(req,res)=> {
    try {
        const getCurrentBookID = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);
        if(deletedBook) {
            res.status(200).json({
                success : true,
                message : "Book deleted successfully",
                data : deletedBook
            })
        } else {
            res.status(404).json({
                success: false,
                message : "Book not found"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : "Something went wrong! Please try again"
        })
    }
}

module.exports = {
    getAllBooks,
    getSingleBookById,
    addNewBook,
    updateSingleBook,
    deleteBook
};
