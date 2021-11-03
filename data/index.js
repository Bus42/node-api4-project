const {v4: uuidv4} = require('uuid');

const users = [
  {
    id: uuidv4(),
    name: "Juan",
  },
  {
    id: uuidv4(),
    name: "Pedro",
  },
  {
    id: uuidv4(),
    name: "Maria",
  },
];

module.exports = { users };
