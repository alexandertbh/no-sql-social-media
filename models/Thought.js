const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

//ema to create User Model

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
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
    reactions: [
      {
        //todo: add an array of nested documents that reference the reactions
        type: Schema.Types.ObjectId,
        ref: "reaction",
      },
    ],
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model("thought", thoughtSchema);
module.exports = Thought;
