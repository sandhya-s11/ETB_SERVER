import express from "express";
import {
  createBooking,
  getBookings,
  getBookingsByUser,
  deleteBooking,
} from "../Controller/bookingController.js";

const router = express.Router();


router.post("/", createBooking);


router.get("/", getBookings);


router.get("/user/:email", getBookingsByUser);


router.delete("/:id", deleteBooking);

export default router;
