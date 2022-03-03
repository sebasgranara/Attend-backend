const router = require('express').Router();
const mongoose = require('mongoose');

const Event = require('../models/event.model');

// Creates a new event
router.post('/events', (req, res, next) => {
  const { _id } = req.payload;
  const { title, category, city, ticketPrice, ticketPurchased, priority, eventHour, organizedBy, notes, attended } = req.body;

  let date = req.body.date;
  if (!title) {
    res.status(400).json({ message: 'Missing title' });
  }
  if (!date) {
    date = new Date();
  }
  Event.create({ userId: _id, title, category, date, city, ticketPrice, ticketPurchased, priority, eventHour, organizedBy, notes })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

// Retrieves all events
router.get('/events', (req, res, next) => {
  const { _id } = req.payload;
  Event.find({ userId: _id })
    .sort({ date: -1 })
    .then(allEvents => res.json(allEvents))
    .catch(err => res.json(err));
});

// Retrieves a specific event by id
router.get('/events/:eventId', (req, res, next) => {
  const { eventId } = req.params;
  const { _id } = req.payload;
  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  Event.find({ _id: eventId, userId: _id })
    .then(events => res.status(200).json(events[0]))
    .catch(error => res.json(error));
});

// Updates a specific event by id {attended:true}
router.put('/events/:eventId', (req, res, next) => {
  const { eventId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Event.findByIdAndUpdate(eventId, req.body, { new: true })
    .then(updatedEvent => res.json(updatedEvent))
    .catch(error => res.json(error));
});

// Deletes a specific event by id
router.delete('/events/:eventId', (req, res, next) => {
  const { eventId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Event.findByIdAndRemove(eventId)
    .then(() => res.json({ message: `Event with ${eventId} is removed successfully.` }))
    .catch(error => res.json(error));
});

module.exports = router;
