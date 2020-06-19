const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  Date: {
    type: Number,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Link: {
    type: String,
    required: true,
  },
  Members: {
    type: String,
    required: true,
  },
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
