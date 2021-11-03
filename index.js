//getting invalid ecma version error in nodejs
require("dotenv").config();
const server = require("./server");
const colors = require("colors");
const cors = require("cors");

colors.enable();
server.use(cors());

const port = process.env.PORT || 5000;

server.use("/", (req, res) => {
  res
    .status(200)
    .send(
      `<p>request from <b>${req.get("host")}</b> to <b>${
        req.url
      }</b> at <b>${new Date().toISOString()}</b> </p>`
    );
});

server.listen(port, () => {
  console.log(`**Server is running on port ${port}**`.america);
});
