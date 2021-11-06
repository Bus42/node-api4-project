const {v4: uuidv4} = require('uuid');

const users = [
  {
    id: uuidv4(),
    username: "Juan",
  },
  {
    id: uuidv4(),
    username: "Pedro",
  },
  {
    id: uuidv4(),
    username: "Maria",
  },
];

module.exports = { users };
