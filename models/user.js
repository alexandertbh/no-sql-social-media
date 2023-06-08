const { Schema, model } = require("mongoose");

// create User Model

userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match:
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thoughts",
    },
  ],
  friends: [{ type: Schema.Types.ObjectId, ref: "friend" }],
});

const User = model("users", userSchema);
module.exports = User;
