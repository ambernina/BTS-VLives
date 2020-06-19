const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Video.find({})
      .then(videos => res.json(videos))
      .catch(err => res.status(422).json(err));
  }
};
