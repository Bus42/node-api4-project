//getting invalid ecma version error in nodejs
require("dotenv").config();
const server = require("./server");
const colors = require("colors");

colors.enable();

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`**Server is running on port ${port}**`.america);
});
