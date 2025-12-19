import Booking from "../Model/Booking.js";


export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    res.status(201).json({
      message: "Booking successful",
      booking,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getBookingsByUser = async (req, res) => {
  try {
    const { email } = req.params;

    const bookings = await Booking.find({ userEmail: email }).sort({
      createdAt: -1,
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking cancelled" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
