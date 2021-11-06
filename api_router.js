const express = require("express");
const apiRouter = express.Router();
const { users } = require("./data");
const {v4: uuidv4} = require('uuid');

apiRouter.use(express.json());

apiRouter.get("/", (req, res) => {
  // this is the root route
  res
    .status(200)
    .send(
      `<p>request from <b>${req.get("host")}</b> to <b>/api${
        req.url
      }</b> at <b>${new Date().toISOString()}</b> </p>`
    );
});

apiRouter.get("/users", (req, res) => {
  res.status(200).send(users);
});

apiRouter.post("/register", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).send("username and password are required");
    }
    const newUser = {
        id: uuidv4(),
        username,
        password,
    };
    users.push(newUser);
    res.status(201).send(newUser);
});

module.exports = apiRouter;
