const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;
