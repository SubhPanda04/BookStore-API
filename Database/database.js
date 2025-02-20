const mongoose = require('mongoose');

const connectToDB = async()=> {
    try {
        await mongoose.connect("mongodb+srv://subhasispanda1256700:1234567Aa@cluster0.f6tw1.mongodb.net/");
        console.log("Connected to Database");
    } catch (e) {
        console.log("Connection Failed",e);
        process.exit(1)
    }
}

module.exports = connectToDB;
