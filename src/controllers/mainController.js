const fs = require('fs');
const path = require('path');

const controller = {
  index: (req, res) => {
    res.render('./home/index');
  },
};

module.exports = controller;
