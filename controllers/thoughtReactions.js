const router = require("express").Router();
const { User, Reaction, Thought } = require("../models");
const { getUsers } = require("./userController");

module.exports = {
  addReaction(req, res) {
    const newReaction = {
      reactionBody: req.body.reactionBody,
      userName: req.body.userName,
    };
    const thoughtId = req.params.thoughtId;
    Thought.findOneAndUpdate(
      { _id: thoughtId },
      { $push: { reactions: newReaction } },
      { new: true, runValidators: true }
    )

      .then((reaction) =>
        res.json([
          { msg: "success! Your reaction was succesfully added" },
          reaction,
        ])
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  removeReaction(req, res) {
    const thoughtId = req.params.thoughtId;
    const reactionId = req.params.reactionId;
    Thought.findOneAndUpdate(
      { _id: thoughtId },
      { $pull: { reactions: { _id: reactionId } } },
      { new: true }
    )
      .then((reaction) =>
        !reaction
          ? res
              .status(404)
              .json({ message: "No reaction found with that ID :(" })
          : res.json({
              reaction,
              messge: "Your reaction was succesfully deleted",
            })
      )
      .catch((err) => res.status(500).json(err));
  },
};
