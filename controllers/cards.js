/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
const path = require('path');
const readFile = require('../helpers');

const getCards = (req, res) => readFile(path.join(__dirname, '../data/cards.json'))
  .then((data) => {
    res
      .status(200)
      .send(JSON.parse(data));
  }).catch((error) => {
    res
      .status(500)
      .send({ message: `произошла ошибка ${error}` });
  });

module.exports = {
  getCards,
};