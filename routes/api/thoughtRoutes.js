const router = require("express").Router();

const {
  getThought,
  createThought,
  removeThought,
  updateThought,
  getSingleThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThought).post(createThought);

router
  .route("/:thoughtId")
  .put(updateThought)
  .delete(removeThought)
  .get(getSingleThought);

module.exports = router;
