const { Schema, Types, model } = require("mongoose");
const reactionSchema = require("./Reaction");

//ema to create User Model

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
    },
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
      min_length: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //todo: add getter method to format timestamp
    },
    username: {
      type: String,
      required: true,
    },

    updatedAt: {
      type: Date,
      default: Date.now,
    },
    // TODO: fix the reactions being added here as it says Invalid schema configuration: `model` is not a valid type within the array `reactions`
    reactions: [{ type: Schema.Types.ObjectId, ref: "reaction" }],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model("thoughts", thoughtSchema);
module.exports = Thought;
