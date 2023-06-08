const { Schema, Types, model } = require("mongoose");
const dayJs = require("dayjs");
const { objectId } = require("mongodb");

//create reaction Model

const Reaction = new Schema({
  reactionBody: {
    type: String,
    required: true,
    min_length: 280,
    min_length: 1,
  },
  userName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: dayJs().format(),
    //todo: add getter method to format timestamp
  },
});

module.exports = Reaction;
