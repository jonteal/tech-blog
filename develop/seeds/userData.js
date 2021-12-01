const { User } = require('../models');

const userData = [
  {
    "username": "Sal",
    "password": "password12345"
  },
  {
    "username": "Lernantino",
    "password": "password12345"
  },
  {
    "username": "Amiko",
    "password": "password12345"
  },
  {
    "username": "Enrique",
    "password": "password12345"
  }
]

const userSeed = () => User.bulkCreate(userData);

module.exports = userSeed;
