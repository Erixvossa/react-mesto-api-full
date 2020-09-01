/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const cardsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectID,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectID,
    default: [],
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardsSchema);
