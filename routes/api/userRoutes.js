const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  //   deleteUser,
  //   addPost,
  //   removePost,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/"userId"
// router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/users/:userId/posts/
// router.route("/:userId/posts").post(addPost);

// /api/user/:userId/posts/:postId/
// router.route("/:userId/posts/:postId").delete(removePost);

module.exports = router;
