const mongoose = require('mongoose');
// const configuration = require('../configuration');


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
  category: { type: String, enum: ['Festival', 'Business', 'Sports', 'Wellness', 'Cultural', 'Personal', 'Other'] },
  attended: Boolean,
  date: Date,
  city: String,
  ticketPrice: Number,
  priority: { type: String, enum: ['High', 'Medium', 'Low'] },
  ticketPurchased: { type: String, enum: ['Yes', 'No', 'Free'] },
  // eventHour: Date,
  // organizedBy: String,
  notes: String,
});

module.exports = model('Event', eventSchema);
