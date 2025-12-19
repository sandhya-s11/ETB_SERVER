import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: String,
  time: String,
  venue: String,
  price: Number,
  image: String,
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);
