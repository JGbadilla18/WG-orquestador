const mongoose = require("mongoose");

// Define User schema
const Schema = mongoose.Schema;


// Attributes of the data object.
const userSchema = new Schema({
  facebookId: String,
  whatsappId: String,
  sessionId: String,
  isAuth: Boolean,
  lastUpdate: Date
});

// Compile model from schema
module.exports = mongoose.model('user', userSchema );