const express = require("express");
const connectDB = require("../config/mongodb.config");

const apiRouter = express.Router();
const verifyToken = require("../middleware/auth");
const userController = require("../controllers/user");
const verifyInput = require("../middleware/verifyInput");

connectDB();

apiRouter.use(express.json());
// test api root
apiRouter.get("/", userController.test);
// get users
apiRouter.get("/users", userController.getUsers);
// verify inputs and register user
apiRouter.post("/register", verifyInput, userController.registerUser);
// verify inputs, login user with basic auth and encrypted password
apiRouter.post("/login", verifyInput, userController.loginUser);
// get user by id with JWT
apiRouter.get("/users/:id", verifyToken, userController.getUserById);

module.exports = apiRouter;
