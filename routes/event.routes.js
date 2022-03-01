const router = require('express').Router();
const mongoose = require('mongoose');

const Event = require('../models/event.model')


router.post('/events', (req, res, next) => {
  const { title, category, date, city, ticketPrice, ticketPurchased, priority, eventHour, organizedBy, notes } = req.body;

  try {
    const event = await Event.create({ title, category, date, city, ticketPrice, ticketPurchased, priority, eventHour, organizedBy, notes });
    res.json({
      created: event,
    });
  } catch (e) {
    next(e);
  }
});