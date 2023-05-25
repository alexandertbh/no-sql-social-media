const { Schema, Types, model } = require("mongoose");

//ema to create reaction Model

reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
      min_length: 1,
    },
    reactionBody: {
      type: String,
      required: true,
      min_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //todo: add getter method to format timestamp
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Reaction = model("reaction", reactionSchema);
module.exports = Reaction;
