require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDB = require('./Database/database.js');
const bookRoutes = require('./Routes/book-routes.js')

//Connect to the Database
connectToDB();

// Middleware -> express.json()
app.use(express.json());

//Routes 
app.use('/api/books', bookRoutes);


app.listen(PORT, ()=> {
    console.log(`Server is now running on port ${PORT}`);
})