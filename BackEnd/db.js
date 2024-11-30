const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://rohitfulari2000:VTVf78dgfyHaf7j6@cluster0.ewx3quj.mongodb.net/mern-pizza?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process with failure
    }

};

module.exports = connectDB;
