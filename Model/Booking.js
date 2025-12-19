import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },   

    eventName: String,
    date: String,
    time: String,
    venue: String,
    price: Number,
    tickets: Number,
    totalAmount: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
