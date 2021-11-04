const express = require("express");
const connectDB = require("../config/mongodb_cfg");

const apiRouter = express.Router();
const auth = require("../middleware/auth");
const userController = require("../controllers/user");

connectDB();

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
