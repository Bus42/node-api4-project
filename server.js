const express = require("express");
const apiRouter = require("./api_router");
const cors = require("cors");

const server = express();

server.use(cors());
server.use("/api", apiRouter);

server.use("/", (req, res) => {
  res
    .status(200)
    .send(
      `<p>request from <b>${req.get("host")}</b> to <b>${
        req.url
      }</b> at <b>${new Date().toISOString()}</b> </p>`
    );
});

module.exports = server;
