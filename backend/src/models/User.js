const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  occupation: String,
});

module.exports = mongoose.model("User", userSchema);
