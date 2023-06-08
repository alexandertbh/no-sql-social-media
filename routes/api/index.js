const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");
const friendRoutes = require("./friendRoutes");
const reactionRoutes = require("./reactionRoutes");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);
router.use("/reactions", reactionRoutes);
router.use("/friends", friendRoutes);

module.exports = router;
