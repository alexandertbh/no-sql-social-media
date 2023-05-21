const { Schema, model } = require("mongoose");

//ema to create User Model

postSchema = new Schema(
  {
    postId: {
      type: this.schema.Types.ObjetId,
      default: () => new Types.ObjectId(),
    },
    postName: {
      type: String,
      required: true,
      max_length: 250,
      min_length: 4,
      default: "Unnamed Post",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    comments: [commentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("users", userSchema);
module.exports = User;
