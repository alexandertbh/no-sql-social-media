const { Schema, model } = require("mongoose");
const postSchema = require("./Post");

//ema to create User Model

userSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      max_length: 50,
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
    },
    password: {
      type: String,
      required: true,
      max_length: 50,
    },
    posts: [postSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("users", userSchema);
module.exports = User;
