const mongoose = require("mongoose");

const commentSChema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    useId: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSChema);
