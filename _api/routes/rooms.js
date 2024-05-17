import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import {verifyAdmin} from "../utils/verifyToken.js";
const router = express.Router();

// Create a hotel
router.post("/:hotelid",verifyAdmin, createRoom);

// Update a hotel
router.put("/:id",verifyAdmin,updateRoom);

// // Delete a hotel
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);

// // Get a hotel by ID
router.get("/:id",getRoom);

// // Get all hotels
router.get("/", getRooms);


export default router