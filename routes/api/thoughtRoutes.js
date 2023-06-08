const router = require("express").Router();

const {
  getThought,
  createThought,
  removeThought,
  updateThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThought).post(createThought);

router
  .route("/:thoughtId")
  .put(updateThought)
  .delete(removeThought)

module.exports = router;
