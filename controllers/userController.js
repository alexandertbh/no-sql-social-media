const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

// aggregate all users to get total user count
const totalUsers = async () =>
  User.aggregate()
    .count("userCount")
    .then((numberOfUsers) => numberOfUsers);

const avgPost = async (userId) =>
  User.aggregate([
    { $match: { _id: ObjectId(userId) } },
    {
      $unwind: "assignments",
    },
    {
      $group: {
        _id: ObjectId(userId),
        overallPosts: { $avg: $posts.total },
      },
    },
  ]);

module.exports = {
  //get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const UserObj = {
          users,
          totalUsers: await totalUsers(),
        };
        return res.json(UserObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  getSingleStudent(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json({
              user,
              grade: await grade(req.params.userId),
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
};
