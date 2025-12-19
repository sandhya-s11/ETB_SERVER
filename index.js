import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Db/db.js";

import eventRoutes from "./Routes/eventRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import bookingRoutes from "./Routes/bookingRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
