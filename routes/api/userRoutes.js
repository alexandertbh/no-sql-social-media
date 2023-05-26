const router = require("express").Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser).delete(deleteUser);

router.route("/:userId").post(addFriend).delete(removeFriend).put(updateUser);

module.exports = router;
