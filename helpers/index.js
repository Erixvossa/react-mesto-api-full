/* eslint-disable linebreak-style */
const fs = require('fs').promises;

const getFile = (file) => fs.readFile(file);
module.exports = getFile;
