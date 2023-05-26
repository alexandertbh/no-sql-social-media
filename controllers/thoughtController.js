const router = require("express").Router();
const { User, Reaction, Thought } = require("../models");
const { getUsers } = require("./userController");

module.exports = {
  // Get all posts
  getThought(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) =>
        User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id } },
          { new: true, runValidators: true }
        )
      )
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  addReaction(req, res) {
    Reaction.create(req.body)
      .then((reaction) =>
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $push: { reactions: reaction._id } },
          { new: true, runValidators: true }
        )
      )
      .then((reaction) => res.json(reaction))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  //TODO: work on fixing route
  removeThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId }).then((thought) =>
      !thought
        ? res.status(404).json({ message: "No thought found with that ID :(" })
        : User.findByIdAndUpdate(
            { thought: req.params.thoughtId },
            { $pull: { thought: req.params.thoughtsId } },
            { new: true }
          )
    );
    res.json(thought).catch((err) => res.status(500).json(err));
  },

  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
