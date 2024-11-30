const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/userModel.js");
const userRouter = express.Router();

// Registration
userRouter.post("/user", async (req, res) => {
    const { name, email, number, password } = req.body;

    try {
        const user = new userModel({ name, email, number, password });
        await user.save();

        // Print the stored user data to the console
        console.log("Stored user data:", user);

        res.json({ msg: "Registration successfully done" });
    } catch (error) {
        console.log("Error saving user:", error.message);
        res.status(500).json({ error: error.message });
    }
});


//api endpoint for users data to get in admin panel

userRouter.get("/getUser",async(req,res) => {
    try {
        const user = await userModel.find();
        res.status(200).json(user); 
        
    } catch (error) {
        console.log("Error showing user data:", error.message);
        res.status(500).json({ error: error.message });     
    }
})

//Login via Email and password

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                res.json({ msg: "success" });
            } else {
                res.status(401).json({ msg: "fail to check password" });
            }
        } else {
            res.status(404).json({ msg: "user not found" });
        }
    } catch (error) {
        console.log("Login API not working", error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
});




//get by id
userRouter.get("/user/:id",async(req,res) => {
    const {id} = req.params;

    try {
        const user = await userModel.findById(id);
    if(!user)
    {
        return res.status(400).json("user not find");
    }

    res.json(user);    
    } 
    catch (error) 
    {
        console.log("Error getting id",error.message);
        res.status(500).json({error:error.message});
        
    }
})


//delete by id used in admin user list to delete the user from databse

userRouter.delete("/deleteUser/:id" ,async(req,res) => {
    const {id} = req.params;

    try {
        const delUser =  await userModel.findByIdAndDelete(id);  
        if(delUser){

            res.status(200).json({"id deleted":id})

        }
        else{
            console.log("id is not send")
        }

    } catch (error) {
        console.log("Error deleting the user id",error.message);
        res.status(500).json({error:error.message});
        
    }
})

module.exports = {
    userRouter
};
