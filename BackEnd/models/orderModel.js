const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true }
    },
    {
        timestamps: true
    }
);

const orderModel = mongoose.model('order', orderSchema);

module.exports = orderModel;
