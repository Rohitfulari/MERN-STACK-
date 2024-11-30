// // Paste the corrected router code here
// const express = require("express");
// const mongoose = require("mongoose");
// const { stuModel } = require("../Model/stuModel");

// const stuRouter = express.Router();

// // registration
// stuRouter.post("/add", async (req, res) => {
//     console.log(req.body);
//     try {
//         const stu = new stuModel(req.body);
//         await stu.save();
//         res.json({ msg: "Student registered successfully" });
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ msg: "Failed to register student" });
//     }
// });

// // Get all students
// stuRouter.get("/", async (req, res) => {
//     try {
//         const students = await stuModel.find();
//         res.json(students);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ msg: "Failed to retrieve students" });
//     }
// });


// // update the student by id
// stuRouter.patch("/update/:id", async (req, res) => {
//     const { id } = req.params;
//     console.log(req.body);
//     try {
//         const stu = await stuModel.findByIdAndUpdate(id, req.body, { new: true });
//         if (stu) {
//             res.json({ msg: "Student updated successfully", stu });
//         } else {
//             res.status(404).json({ msg: "Student not found" });
//         }
//     } catch (error) {
//         console.log("error msg :" + error.message);
//         res.status(500).json({ msg: "Failed to update student" });
//     }
// });



// // delete the student by id
// stuRouter.delete("/delete/:id", async (req, res) => {
//     const { id } = req.params;

//     try {
//         const student = await stuModel.findByIdAndDelete(id);
//         if (student) {
//             res.json({ msg: "Student has been deleted" });
//         } else {
//             res.status(404).json({ msg: "Student not found" });
//         }
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ msg: "Failed to delete student" });
//     }
// });

// module.exports = {
//     stuRouter
// };
