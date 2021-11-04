const mongoose = require("mongoose");

// Connect to MongoDB
function connectDB() {
  const mongoDB =
    "mongodb+srv://greg:GWv1lKty2hArudjx@cluster0.wsuqu.mongodb.net/node-api4-project?retryWrites=true&w=majority";

  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
}

module.exports = connectDB;
