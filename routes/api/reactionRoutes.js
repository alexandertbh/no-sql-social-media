const router = require("express").Router();
const {
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtReactions");

router.route("/thoughts/:thoughtId/reactions").post(addReaction);

router
  .route("/thoughts/:thoughtId/reactions/:reactionId")
  .delete(removeReaction);

module.exports = router;
