import Event from "../Model/Events.js";


export const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.status(201).json(event);
};


export const getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};


export const getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);
  res.json(event);
};


export const updateEvent = async (req, res) => {
  const updated = await Event.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};


export const deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Event deleted successfully" });
};
