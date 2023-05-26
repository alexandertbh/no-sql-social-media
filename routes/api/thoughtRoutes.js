const router = require("express").Router();

const {
  getThought,
  createThought,
  removeThought,
  addReaction,
  updateThought,
  removeReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getThought).post(createThought).delete(removeThought);

router
  .route("/:thoughtId")
  .post(addReaction)
  .delete(removeReaction)
  .put(updateThought);

module.exports = router;
