const express = require("express");
const apiRouter = express.Router();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const { getUsers } = require("./controllers/userController");
const Users = require("./models/users");

// mongo config
const mongoDB =
  "mongodb+srv://greg:GWv1lKty2hArudjx@cluster0.wsuqu.mongodb.net/node-api4-project?retryWrites=true&w=majority";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

apiRouter.use(express.json());

apiRouter.get("/", (req, res) => {
  res
    .status(200)
    .send(
      `<p>request from <b>${req.get("host")}</b> to <b>/api${
        req.url
      }</b> at <b>${new Date().toISOString()}</b> </p>`
    );
});

apiRouter.get("/users", (req, res) => {
  Users.find()
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send(err));
});

apiRouter.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).send("username and password are required");
  }

  const newUser = {
    username,
    password,
  };
  Users.create(newUser)
    .then((user) => res.status(201).send(user))
    .catch((err) => res.status(500).send(err));
});

module.exports = apiRouter;
