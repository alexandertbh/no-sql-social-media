const { ObjectId } = require("mongoose").Types;
const { Student, Course } = require("../models");

// aggregate all users to get total user count
const totalUsers = async () =>
  userInfo
    .aggregate()
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
        _id: ObjectId(studentId),
        overallPosts: { $avg: $posts.total },
      },
    },
  ]);

module.exports = {
  //get all users
  getUsers(req, res) {
    User.find()
      .then(async (students) => {
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
};
