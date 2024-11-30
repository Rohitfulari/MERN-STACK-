const express = require("express");
const mongoose = require("mongoose");
const orderModel = require("../models/orderModel");
const orderRouter = express.Router();

orderRouter.post("/", async (req, res) => {
    const { items } = req.body;
  
    try {
      const orders = await Promise.all(items.map(async (item) => {

      //  In your case, Promise.all is used to handle multiple asynchronous operations (saving multiple items to the database) 
      //in parallel and wait for all of them to complete before proceeding.
      
        const { name, description, price } = item;
        const order = new orderModel({ name, description, price });
        await order.save();
        return order;
      }));
  
      console.log("Stored orders:", orders);
  
      res.json({ msg: "Orders created successfully", orders });
    } catch (error) {
      console.log("Error saving orders:", error.message);
      res.status(500).json({ error: error.message });
    }
  });


  //apiendpoint for giving newOrder List

  orderRouter.get("/addToCartOrder" ,async(req,res) => {
    try {
      const order = await orderModel.find();
      res.status(200).json(order);
      
    } catch (error) {
       console.log("Error showing Order list:", error.message);
        res.status(500).json({ error: error.message });  
      
    }

  });

module.exports = {
    orderRouter
};
