const router = require("express").Router();
const { User, Thought } = require("../models");

module.exports = {
  addFriend(req, res) {
    const userId = req.params.userId;
    const friendId = req.params.friendId;
    User.findOneAndUpdate(
      { _id: userId },
      { $push: { friends: friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with that ID :(" })
          : res.json([
              {
                msge: `Sucess! Your friend ${friendId} was sucessfully added!`,
              },
              user,
            ])
      )
      .catch((err) => res.status(500).json(err));
  },
  removeFriend(req, res) {
    const userId = req.params.userId;
    const friendId = req.params.friendId;
    User.findOneAndUpdate(
      { _id: userId },
      { $pull: { friends: friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with that ID :(" })
          : res.json({ messge: "Your friend was succesfully deleted" })
      )
      .catch((err) => res.status(500).json(err));
  },
};
