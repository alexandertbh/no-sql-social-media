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
      .then((thought) =>
        res.json([
          { msg: "success! Your rhought was sucessfully created!" },
          thought.thoughtText,
        ])
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  removeThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) => {
        if (!thought) {
          return res
            .status(404)
            .json({ message: "No thought found with that ID :(" });
        }
        res.json({ msg: "your thought was deleted" });
      })
      .catch((err) => res.status(500).json(err));
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
          : res.json([
              thought.thoughtText,
              { message: "new thought successfuly updated" },
            ])
      )
      .catch((err) => res.status(500).json(err));
  },
};
