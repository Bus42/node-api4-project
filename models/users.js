const mongoose = require("mongoose");

const User = mongoose.model("User", {
  username: { type: String, required: true, minlength: 3 },
  password: { type: String, required: true, minlength: 6 },
});

module.exports = User;