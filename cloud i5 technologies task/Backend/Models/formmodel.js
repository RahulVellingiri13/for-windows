const mongoose = require("mongoose");

const Formschema = new mongoose.Schema({
  name: { type: String },
  mobileNumber: { type: Number },
  email: { type: String },
  country: { type: String },
  state: { type: String },
  city: { type: String },
  pincode: { type: Number },
  address: { type: String },
});

module.exports = mongoose.model("FormCollection", Formschema);
