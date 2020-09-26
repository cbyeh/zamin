const mongoose = require('mongoose');
const User = require('./user');

const Schema = mongoose.Schema;

const addressSchema = new Schema({
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
    // required: true,
  },
  state: {
    type: String,
    // required: true,
  },
  zip: {
    type: Number,
    // required: true,
  },
});

const listingSchema = new Schema({
  owner: {
    type: User,
  },
  geolocation: {
    type: String, // TODO:
  },
  headline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  address: {
    type: addressSchema,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    // required: true,
  },
  pictures: {
    type: [String], // URLs to images in s3
  },
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = { Listing };
