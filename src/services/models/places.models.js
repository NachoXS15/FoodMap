const mongoose = require ('mongoose');
const { Schema } = mongoose;

const placeSchema = new Schema({
  name: String,
  score: Number,
  hood: String,
  contact: {
	tel: Number,
	email: String
  },
  coordinates: {
	latitude: Number,
	longitude: Number
  }
});

const Place = mongoose.model('Place', placeSchema);

module.exports = {Place};