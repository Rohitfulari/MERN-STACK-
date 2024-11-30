const express = require("express");
const connectDB = require("./db.js");
const cors = require("cors");
const user = require("../BackEnd/Routes/userRoute.js");
const dish = require("../BackEnd/Routes/dishRoute.js");
const order = require("../BackEnd/Routes/orderRoute.js");

const app = express();

// Connect to the database
connectDB();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/user", user.userRouter);
app.use("/", dish.dishRouter);
app.use("/myOrder", order.orderRouter);

// Start the server
app.listen(5000, () => {
  console.log("Server is running at PORT 5000...");
});
