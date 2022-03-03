const mongoose = require('mongoose');
const configuration = require('../configuration');

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
  category: { type: String, enum: configuration.category },
  attended:Boolean,
  date: Date,
  city: String,
  ticketPrice: Number,
  priority: { type: String, enum: configuration.priority },
  ticketPurchased: { type: String, enum: configuration.ticketPurchased },
  eventHour: Number,
  organizedBy: String,
  notes: String,
});

module.exports = model('Event', eventSchema);
