const router = require("express").Router();

const {
  getThought,
  createThought,
  removeThought,
  //TODO: add reaction
  addReaction,
  //TODO: delete reaction
  updateThought,
  deleteReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getThought).post(createThought);

router
  .route("/:thoughtId")
  .post(addReaction)
  .delete(removeThought)
  .put(updateThought);

module.exports = router;
