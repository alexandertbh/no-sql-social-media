const router = require("express").Router();
const { addFriend, removeFriend } = require("../../controllers/Friends");

router
  .route("/user/:userId/friend/:friendId")
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
