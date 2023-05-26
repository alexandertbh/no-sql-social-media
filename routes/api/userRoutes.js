const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  //TODO: add friend
  //TODO: delete friend
  //   addPost,
  //   removePost,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

router.route("/:userId").put(updateUser).delete(deleteUser).get(getSingleUser);

// /api/users/"userId"
// router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/users/:userId/posts/
// router.route("/:userId/posts").post(addPost);

// /api/user/:userId/posts/:postId/
// router.route("/:userId/posts/:postId").delete(removePost);

module.exports = router;
