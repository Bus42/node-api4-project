const express = require("express");
const apiRouter = express.Router();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const Users = require("./models/users");
const bcrypt = require("bcryptjs");
const auth = require("./middleware/auth");
const userController = require("./controllers/user");

// mongo config
const mongoDB =
  "mongodb+srv://greg:GWv1lKty2hArudjx@cluster0.wsuqu.mongodb.net/node-api4-project?retryWrites=true&w=majority";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

apiRouter.use(express.json());
// test api root
apiRouter.get("/", userController.test);
// get users
apiRouter.get("/users", userController.getUsers);
// register user
apiRouter.post("/register", userController.registerUser);
// login user with basic auth and encrypted password
apiRouter.post("/login", userController.loginUser);
// get user by id
apiRouter.get("/users/:id", auth, userController.getUserById);

module.exports = apiRouter;
