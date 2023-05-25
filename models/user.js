const { Schema, model } = require("mongoose");
const postSchema = require("./Thought");

//ema to create User Model

userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
      unique: true,
      email: true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [{ type: Schema.Types.ObjectId, ref: "users" }],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("users", userSchema);
module.exports = User;
