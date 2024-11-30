const express = require("express");
const mongoose = require("mongoose");
const dishModel = require("../models/dishModel.js");
const dishRouter = express.Router();

// API endpoint for getting the dishes
dishRouter.get("/getDish", async (req, res) => {  // Note: Adjusted to match the route in index.js
    try {
        const dishes = await dishModel.find({});
        res.json(dishes);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

module.exports = {
    dishRouter
};
