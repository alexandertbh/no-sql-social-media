const { Schema, Types, model } = require("mongoose");
const Reaction = require("./Reaction");
const dayJs = require("dayjs");

//ema to create User Model

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    max_length: 280,
    min_length: 1,
  },
  createdAt: {
    type: Date,
    default: dayJs().format(),
  },
  username: {
    type: String,
    required: true,
  },

  updatedAt: {
    type: Date,
    default: dayJs().toDate("MM/DD/YYYY"),
  },
  reactions: [Reaction],
});

const Thought = model("thoughts", thoughtSchema);
module.exports = Thought;
