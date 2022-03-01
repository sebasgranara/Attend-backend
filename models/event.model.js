const mongoose = require('mongoose');
const config = require('../config');

const { Schema, model } = mongoose;

const eventSchema = new Schema({
  image: {
    type: String,
    default: '/images/..', //buscar imagenes default por categoria
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  category: { type: String, enum: config.category },
  date: Date,
  city: String,
  ticketPrice: Number,
  priority: { type: String, enum: config.priority },
  ticketPurchased: { type: String, enum: config.ticketPurchased },
  eventHour: Number,
  organizedBy: String,
  notes: String,
});

module.exports = model('Event', eventSchema);

