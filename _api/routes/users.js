import express from "express";
import { deleteUser, getUser, getUsers, updatedUser } from "../controllers/user.js";
import User from "../models/User.js";
//import { createError } from "../utils/error.js";
import { verifyToken,verifyUser,verifyAdmin} from "../utils/verifyToken.js";


const router = express.Router();

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("Hello user,You are Logged in")
})
router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("Hello user,You are Logged in and you can deleted your account")
})
router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("Hello user,You are Logged in and you can deleted all account")
})


// Update a hotel
router.put("/:id",verifyUser, updatedUser);

// // Delete a hotel
router.delete("/:id",verifyUser,deleteUser);

// // Get a hotel by ID
router.get("/:id",verifyUser,getUser);

// // Get all hotels
router.get("/", verifyAdmin,getUsers);

export default router

