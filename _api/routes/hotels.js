import express from "express"

const router =express.Router();

// Create a hotel
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { countByCity, createHotel,deleteHotel, getHotel, getHotels, updatedHotel } from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
// Create a hotel
router.post("/",verifyAdmin, createHotel);

// Update a hotel
router.put("/:id",verifyAdmin, updatedHotel);

// // Delete a hotel
router.delete("/:id",verifyAdmin,deleteHotel);

// // Get a hotel by ID
router.get("/:id",getHotel);

// // Get all hotels
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getHotels);

export default router