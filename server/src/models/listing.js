const mongoose = require("mongoose");
const User = require("./user");

const Schema = mongoose.Schema;

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
    type: String, // TODO:
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    // required: true,
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = { Listing };
