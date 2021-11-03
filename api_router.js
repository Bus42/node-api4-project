const express = require("express");
const apiRouter = express.Router();
const { users } = require("./data");
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

module.exports = apiRouter;
