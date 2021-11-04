const Users = require("../models/users");
const bcrypt = require("bcryptjs");

function test(req, res) {
  res
    .status(200)
    .send(
      `<p>request from <b>${req.get("host")}</b> to <b>/api${
        req.url
      }</b> at <b>${new Date().toISOString()}</b> </p>`
    );
}

function getUsers(req, res) {
  Users.find()
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send(err));
}

function registerUser(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).send("Please provide username and password");
  } else {
    Users.findOne({ username })
      .then((user) => {
        if (user) {
          res.status(400).send("Username already exists");
        } else {
          bcrypt
            .hash(password, 10)
            .then((hash) => {
              Users.create({ username, password: hash })
                .then((user) => res.status(201).send(user))
                .catch((err) => res.status(500).send(err));
            })
            .catch((err) => res.status(500).send(err));
        }
      })
      .catch((err) => res.status(500).send(err));
  }
}

function loginUser(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).send("Please provide username and password");
  } else {
    Users.findOne({ username })
      .then((user) => {
        if (!user) {
          res.status(400).send("User not found");
        } else {
          bcrypt
            .compare(password, user.password)
            .then((isMatch) => {
              if (isMatch) {
                res.status(200).send(user);
              } else {
                res.status(400).send("Incorrect password");
              }
            })
            .catch((err) => res.status(500).send(err));
        }
      })
      .catch((err) => res.status(500).send(err));
  }
}

function getUserById(req, res) {
  const { id } = req.params;
  Users.findById(id)
    .then((user) => res.status(200).send(user))
    .catch((err) => res.status(500).send(err));
}

module.exports = {
  test,
  getUsers,
  registerUser,
  loginUser,
  getUserById,
};
